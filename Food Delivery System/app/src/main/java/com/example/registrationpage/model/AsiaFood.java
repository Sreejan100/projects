package com.example.registrationpage.model;

public class AsiaFood {

    String name;
    String price;
    Integer imageUrl;
    String restaurantname;
    String rating;

    public AsiaFood(String name, String price, Integer imageUrl, String restaurantname, String rating) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.restaurantname = restaurantname;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Integer getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(Integer imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getRestaurantname() {
        return restaurantname;
    }

    public void setRestaurantname(String restaurantname) {
        this.restaurantname = restaurantname;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}
