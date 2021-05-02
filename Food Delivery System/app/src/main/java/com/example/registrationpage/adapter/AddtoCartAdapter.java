package com.example.registrationpage.adapter;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.LayoutInflater;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.registrationpage.R;
import com.example.registrationpage.model.AddtoCart;

import java.util.List;

public class AddtoCartAdapter extends RecyclerView.Adapter<AddtoCartAdapter.AddtoCartViewHolder> {
    Context context;
    List<AddtoCart> addtoCartList;

    public AddtoCartAdapter(Context context, List<AddtoCart> addtoCartList) {
        this.context = context;
        this.addtoCartList = addtoCartList;
    }

    @NonNull
    @Override
    public AddtoCartViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.addtocartrecycler,parent,false);
        return new AddtoCartViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull AddtoCartViewHolder holder, int position) {
        holder.image.setImageResource(addtoCartList.get(position).getImageUrl());
        holder.name.setText(addtoCartList.get(position).getName());
        holder.rating.setText(addtoCartList.get(position).getRating());
        holder.price.setText(addtoCartList.get(position).getPrice());
    }

    @Override
    public int getItemCount() {
        return addtoCartList.size();
    }


    public static final class AddtoCartViewHolder extends RecyclerView.ViewHolder{
        ImageView image;
        TextView name;
        TextView rating;
        TextView price;

        public AddtoCartViewHolder(@NonNull View itemView)
        {
            super(itemView);
            image = itemView.findViewById(R.id.cartimage);
            name = itemView.findViewById(R.id.cartfoodname);
            rating = itemView.findViewById(R.id.cartratingtext);
            price = itemView.findViewById(R.id.cartfoodprice);
        }

    }
}
