package com.example.registrationpage;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.registrationpage.adapter.AddtoCartAdapter;
import com.example.registrationpage.model.AddtoCart;

import java.util.ArrayList;
import java.util.List;

public class addtocart extends AppCompatActivity {
    RecyclerView addtocartrecycleview;
    AddtoCartAdapter addtoCartAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_addtocart);

        List<AddtoCart> listitems = new ArrayList<>();

        listitems.add(new AddtoCart(R.drawable.popularfood1,"4.7","Float Cake Vietnam","$7.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood2,"4.2","Chicken Tikka","$6.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood3,"4.5","Panner Masala","$5.09"));
        listitems.add(new AddtoCart(R.drawable.popularfood1,"4.7","Float Cake Vietnam","$7.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood2,"4.2","Chicken Tikka","$6.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood3,"4.5","Panner Masala","$5.09"));
        listitems.add(new AddtoCart(R.drawable.popularfood1,"4.7","Float Cake Vietnam","$7.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood2,"4.2","Chicken Tikka","$6.05"));
        listitems.add(new AddtoCart(R.drawable.popularfood3,"4.5","Panner Masala","$5.09"));

        setAddtocart(listitems);

    }

    private void setAddtocart(List<AddtoCart> listitems) {

        addtocartrecycleview = (RecyclerView)findViewById(R.id.cartrecyclerview);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this,RecyclerView.VERTICAL,false);
        addtocartrecycleview.setLayoutManager(layoutManager);
        addtoCartAdapter = new AddtoCartAdapter(this,listitems);
        addtocartrecycleview.setAdapter(addtoCartAdapter);
    }
}