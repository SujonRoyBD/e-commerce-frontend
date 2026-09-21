"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star, ShoppingCart, Check, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/features/carts/cartSlice";

interface Product {
  id: string;
  name: string;
  image: string;
  distance: string;
  availability: string;
  price: number;
  unit: string;
  rating: number;
  reviewCount: number;
  isOutOfStock?: boolean;
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Organic Sweet Strawberries",
    image: "/assets/farmProduct/fresh Strawberries1.png",
    distance: "2.5 miles away",
    availability: "Harvested this morning",
    price: 8.5,
    unit: "per basket",
    rating: 4.9,
    reviewCount: 98,
  },
  {
    id: "prod-2",
    name: "Heirloom Beefsteak Tomatoes",
    image: "/assets/farmProduct/fresh Strawberries2.png",
    distance: "1.8 miles away",
    availability: "Available daily",
    price: 6.0,
    unit: "per lb",
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: "prod-3",
    name: "Fresh Crisp Garden Spinach",
    image: "/assets/farmProduct/fresh Strawberries3.png",
    distance: "3.2 miles away",
    availability: "Plucked to order",
    price: 4.25,
    unit: "per bunch",
    rating: 4.9,
    reviewCount: 62,
  },
  {
    id: "prod-4",
    name: "Wildflower Raw Honey Jar",
    image: "/assets/farmProduct/fresh Strawberries4.png",
    distance: "4.0 miles away",
    availability: "Out of Stock for season",
    price: 14.0,
    unit: "16 oz jar",
    rating: 5.0,
    reviewCount: 112,
    isOutOfStock: true,
  },
  {
    id: "prod-5",
    name: "Crisp Rainbow Carrots",
    image: "/assets/farmProduct/fresh Strawberries5.png",
    distance: "2.5 miles away",
    availability: "In season now",
    price: 5.5,
    unit: "per bunch",
    rating: 4.7,
    reviewCount: 38,
  },
  {
    id: "prod-6",
    name: "Artisan Sourdough Loaf",
    image: "/assets/farmProduct/fresh Strawberries3.png",
    distance: "1.2 miles away",
    availability: "Baked daily at 5 AM",
    price: 9.0,
    unit: "whole loaf",
    rating: 4.9,
    reviewCount: 84,
  },
  {
    id: "prod-7",
    name: "Fresh Blackberries",
    image: "/assets/farmProduct/fresh Strawberries7.png",
    distance: "3.5 miles away",
    availability: "Summer harvest",
    price: 7.5,
    unit: "per pint",
    rating: 4.8,
    reviewCount: 53,
  },
  {
    id: "prod-8",
    name: "Pasture-Raised Brown Eggs",
    image: "/assets/farmProduct/fresh Strawberries5.png",
    distance: "2.1 miles away",
    availability: "Collected daily",
    price: 7.0,
    unit: "per dozen",
    rating: 5.0,
    reviewCount: 129,
  },
];

const FarmProducts = () => {
  const dispatch = useAppDispatch();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  };

  const handleAddToCart = (product: Product) => {
    if (product.isOutOfStock) return;

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );

    // Show temporary "Added" checkmark
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Harvest Marketplace
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Available Produce from this Farm
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Plucked fresh on order. Delivered directly to your home or available for pick-up.
          </p>
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const isAdded = addedIds.has(product.id);

          return (
            <Card
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Favorite Button */}
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2.5 right-2.5 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all active:scale-95"
                    aria-label="Toggle wishlist"
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors ${
                        favorites.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500 hover:text-red-500"
                      }`}
                    />
                  </button>

                  {/* Out of Stock or Fresh Badge */}
                  {product.isOutOfStock ? (
                    <Badge className="absolute top-2.5 left-2.5 bg-gray-800/90 text-white text-[10px] font-bold">
                      Sold Out
                    </Badge>
                  ) : (
                    <Badge className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold">
                      Fresh Harvest
                    </Badge>
                  )}
                </div>

                {/* Product Details */}
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" /> {product.distance}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-gray-800">{product.rating}</span>
                      <span className="text-gray-400">({product.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-emerald-700 font-medium mt-1">
                    {product.availability}
                  </p>
                </CardContent>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="p-4 sm:p-5 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">{product.unit}</span>
                </div>

                <Button
                  size="sm"
                  disabled={product.isOutOfStock}
                  onClick={() => handleAddToCart(product)}
                  className={`rounded-full px-3.5 transition-all text-xs font-semibold ${
                    isAdded
                      ? "bg-emerald-700 text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" /> Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Add
                    </>
                  )}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FarmProducts;