package com.example.registrationpage.model;

public class AddtoCart {
    Integer imageUrl;
    String rating;
    String Name;
    String price;

    public AddtoCart(Integer imageUrl, String rating, String name, String price) {
        this.imageUrl = imageUrl;
        this.rating = rating;
        Name = name;
        this.price = price;
    }

    public Integer getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(Integer imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
