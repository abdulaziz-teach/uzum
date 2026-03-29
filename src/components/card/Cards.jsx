import React, { useEffect, useMemo, useState } from "react";
import { readScopedCartItems, writeScopedCartItems } from "../../utils/scopedCartStorage";
import {
  readScopedFavoriteItems,
  writeScopedFavoriteItems,
} from "../../utils/scopedFavoritesStorage";

const Cards = ({
  img,
  price,
  oldPrice,
  tolash,
  discription,
  reyting,
  gaps,
  dates = "Ertaga",
  like,
}) => {
  const MIN_QTY = 1;
  const MAX_QTY = 100;
  const clampQuantity = (value) => Math.min(MAX_QTY, Math.max(MIN_QTY, Number(value) || MIN_QTY));

  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const basePrice = useMemo(() => {
    const numericValue = Number(String(price ?? "").replace(/\D/g, ""));
    return Number.isFinite(numericValue) ? numericValue : 0;
  }, [price]);

  const formatPrice = (value) => value.toLocaleString("ru-RU");
  const totalPrice = basePrice * count;
  const itemId = `${img}-${discription}`;

  useEffect(() => {
    const syncFavoriteState = () => {
      const favoriteItems = readScopedFavoriteItems();
      setIsLiked(favoriteItems.some((item) => item.id === itemId));
    };

    syncFavoriteState();
    window.addEventListener("favorites-updated", syncFavoriteState);
    window.addEventListener("storage", syncFavoriteState);
    return () => {
      window.removeEventListener("favorites-updated", syncFavoriteState);
      window.removeEventListener("storage", syncFavoriteState);
    };
  }, [itemId]);

  const toggleFavorite = () => {
    const favoriteItems = readScopedFavoriteItems();
    const exists = favoriteItems.some((item) => item.id === itemId);

    if (exists) {
      writeScopedFavoriteItems(favoriteItems.filter((item) => item.id !== itemId));
      setIsLiked(false);
      return;
    }

    writeScopedFavoriteItems([
      ...favoriteItems,
      {
        id: itemId,
        img,
        discription,
        price: basePrice,
        oldPrice,
      },
    ]);
    setIsLiked(true);
  };

  const addToCartFromModal = () => {
    const cartItems = readScopedCartItems();
    const existingItem = cartItems.find((item) => item.id === itemId);

    if (existingItem) {
      writeScopedCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: clampQuantity(Number(item.quantity || MIN_QTY) + count) } : item
        )
      );
    } else {
      writeScopedCartItems([
        ...cartItems,
        {
          id: itemId,
          img,
          discription,
          price: basePrice,
          oldPrice,
          quantity: clampQuantity(count),
        },
      ]);
    }

    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") setIsOpen(true);
        }}
        className="flex h-full flex-col overflow-hidden rounded-xl bg-white font-sans shadow-md"
      >
        <div className="relative">
          <button
            className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1"
            onClick={(event) => {
              event.stopPropagation();
              toggleFavorite();
            }}
            aria-label="Saralash"
          >
            <img
              className="h-6 w-6"
              src={
                isLiked || like
                  ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDJhZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIvPjwvc3ZnPg=="
                  : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIvPjwvc3ZnPg=="
              }
              alt=""
            />
          </button>

          <img src={img} alt="Product" className="h-[200px] w-full object-cover sm:h-[260px]" />
        </div>

        <div className="flex flex-1 flex-col gap-1 p-3">
          <div className="flex items-center gap-1 text-lg font-bold text-purple-600">
            {price} so'm
            <span className="inline-flex">
              <img
                className="h-5 w-5"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTAwZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjEwIiB5Mj0iMTAiLz48L3N2Zz4="
                alt=""
              />
            </span>
          </div>

          <div className="min-h-[20px] text-sm text-gray-400">{oldPrice ? <span className="line-through">{oldPrice} so'm</span> : <span className="invisible">0 so'm</span>}</div>

          <div className="w-fit rounded bg-yellow-300 px-2 py-[2px] text-xs text-black">{tolash} so'm/oyiga</div>

          <p className="line-clamp-2 min-h-[40px] text-sm text-gray-800">{discription}</p>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            ? <span>{reyting}</span>
            <span className="text-gray-400">({gaps} sharhlar)</span>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(true);
            }}
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            <img
              className="h-5 w-5"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMTUgMTEtMSA5Ii8+PHBhdGggZD0ibTE5IDExLTQtNyIvPjxwYXRoIGQ9Ik0yIDExaDIwIi8+PHBhdGggZD0ibTMuNSAxMSAxLjYgNy40YTIgMiAwIDAgMCAyIDEuNmg5LjhhMiAyIDAgMCAwIDItMS42bDEuNy03LjQiLz48cGF0aCBkPSJNNC41IDE1LjVoMTUiLz48cGF0aCBkPSJtNSAxMSA0LTciLz48cGF0aCBkPSJtOSAxMSAxIDkiLz48L3N2Zz4="
              alt=""
            />
            {dates}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setIsOpen(false)}>
          <div
            className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="bg-gray-100 p-4 md:p-6">
              <img src={img} alt={discription} className="h-[260px] w-full rounded-xl bg-white object-contain md:h-[500px]" />
            </div>

            <div className="p-5 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold text-gray-900 md:text-2xl">{discription}</h2>
                <button onClick={() => setIsOpen(false)} className="h-9 w-9 rounded-full bg-gray-100 text-gray-700" aria-label="Yopish">
                  x
                </button>
              </div>

              <p className="mt-4 text-3xl font-extrabold text-violet-600 sm:text-4xl">{formatPrice(totalPrice)} so'm</p>
              <p className="mt-2 text-sm text-gray-500">Dona narxi: {formatPrice(basePrice)} so'm</p>

              <div className="mt-6 flex items-center gap-3">
                <button onClick={() => setCount((prev) => Math.max(1, prev - 1))} className="h-12 w-12 rounded-xl bg-gray-200 text-2xl font-bold">
                  -
                </button>
                <span className="w-14 text-center text-xl font-semibold">{count}</span>
                <button
                  onClick={() => setCount((prev) => clampQuantity(prev + 1))}
                  disabled={count >= MAX_QTY}
                  className="h-12 w-12 rounded-xl bg-violet-600 text-2xl font-bold text-white disabled:opacity-60"
                >
                  +
                </button>
              </div>

              <button onClick={addToCartFromModal} className="mt-8 w-full rounded-xl bg-violet-600 py-3 text-lg font-semibold text-white hover:bg-violet-700">
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
