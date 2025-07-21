"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Product {
  id: string
  name: string
  image: string
  distance: string
  availability: string
  price: string
  rating: number
  reviewCount: number
  isOutOfStock?: boolean
  isFavorite?: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries1.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries2.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries3.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries4.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isOutOfStock: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries5.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries3.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries7.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "8",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries5.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "9",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries1.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "10",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries3.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "11",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries4.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
  {
    id: "12",
    name: "Fresh Strawberries",
    image: "/assets/farmProduct/fresh Strawberries7.png",
    distance: "2.5 kilometers away",
    availability: "Available all year",
    price: "$25 per box",
    rating: 4.8,
    reviewCount: 98,
    isFavorite: false,
  },
]

const FarmProducts =()=> {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="container text-2xl font-bold text-gray-900 mb-8">Farms Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 container gap-9">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group w-[360px] md:w-[250px] h-[300px] py-9 relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart
                  className={`h-4 w-4 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                />
              </Button>

              {/* Out of Stock Badge */}
              {product.isOutOfStock && (
                <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">Out of Stock</Badge>
              )}
            </div>

            <CardContent className="p-3">
              <div className="space-y-1">
                <h3 className="font-medium text-sm text-gray-900 line-clamp-1">{product.name}</h3>

                <p className="text-xs text-gray-500">{product.distance}</p>

                <p className="text-xs text-gray-500">{product.availability}</p>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-semibold text-sm text-gray-900">{product.price}</span>

                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-900">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviewCount})</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default FarmProducts;