package com.example.registrationpage.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.registrationpage.R;
import com.example.registrationpage.model.AsiaFood;


import java.util.List;

public class AsiaFoodAdapter extends RecyclerView.Adapter<AsiaFoodAdapter.AsiaFoodViewHolder> {

     Context context;
     List<AsiaFood> asiaFood;

    public AsiaFoodAdapter(Context context, List<AsiaFood> asiaFood) {
        this.context = context;
        this.asiaFood = asiaFood;
    }

    @NonNull
    @Override
    public AsiaFoodViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(context).inflate(R.layout.asiafoodcard,parent,false);
        return new AsiaFoodViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull AsiaFoodViewHolder holder, int position) {
        holder.image.setImageResource(asiaFood.get(position).getImageUrl());
        holder.name.setText(asiaFood.get(position).getName());
        holder.price.setText(asiaFood.get(position).getPrice());
        holder.rating.setText(asiaFood.get(position).getRating());
        holder.restaurantName.setText(asiaFood.get(position).getRestaurantname());

    }

    @Override
    public int getItemCount() {
        return asiaFood.size();
    }


    public static final class AsiaFoodViewHolder extends RecyclerView.ViewHolder {

        ImageView image;
        TextView name;
        TextView price;
        TextView rating;
        TextView restaurantName;


        public AsiaFoodViewHolder(@NonNull View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.foodimage);
            name = itemView.findViewById(R.id.nameofpopularfood);
            price = itemView.findViewById(R.id.price);
            rating = itemView.findViewById(R.id.rating);
            restaurantName = itemView.findViewById(R.id.restaurantname);

        }
    }

}
