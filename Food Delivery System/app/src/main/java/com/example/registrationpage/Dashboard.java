package com.example.registrationpage;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.registrationpage.adapter.AsiaFoodAdapter;
import com.example.registrationpage.adapter.PopularFoodAdapter;
import com.example.registrationpage.model.AsiaFood;
import com.example.registrationpage.model.PopularFood;

import java.util.ArrayList;
import java.util.List;

public class Dashboard extends AppCompatActivity {

    RecyclerView popularfood,asiaRecycler;
    PopularFoodAdapter popularFoodAdapter;
    AsiaFoodAdapter asiafoodadapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);

        List<PopularFood> popularFoodList = new ArrayList<>();
        popularFoodList.add(new PopularFood("Float Cake Vietnam","$7.05",R.drawable.popularfood1));
        popularFoodList.add(new PopularFood("Chicken Drumstick","$17.05",R.drawable.popularfood2));
        popularFoodList.add(new PopularFood("Fish Tikka","$27.05",R.drawable.popularfood3));
        popularFoodList.add(new PopularFood("Float Cake Vietnam","$7.05",R.drawable.popularfood1));
        popularFoodList.add(new PopularFood("Chicken Drumstick","$17.05",R.drawable.popularfood2));
        popularFoodList.add(new PopularFood("Fish Tikka","$27.05",R.drawable.popularfood3));

        List<AsiaFood> asiafoodlist = new ArrayList<>();
        asiafoodlist.add(new AsiaFood("Chicago pizza","$20",R.drawable.asiafood1,"Briand Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Strawberry Cake","$25",R.drawable.asiafood2,"Daniel Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Chicago pizza","$20",R.drawable.asiafood1,"Briand Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Strawberry Cake","$25",R.drawable.asiafood2,"Daniel Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Chicago pizza","$20",R.drawable.asiafood1,"Briand Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Strawberry Cake","$25",R.drawable.asiafood2,"Daniel Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Chicago pizza","$20",R.drawable.asiafood1,"Briand Restaurant","4.5"));
        asiafoodlist.add(new AsiaFood("Strawberry Cake","$25",R.drawable.asiafood2,"Daniel Restaurant","4.5"));


        setPopularFoodAdapter(popularFoodList);
        setAsiafoodadapter(asiafoodlist);
    }

    private void setPopularFoodAdapter(List<PopularFood> popularFoodList){
          popularfood = (RecyclerView)findViewById(R.id.popularfoodrecycler);
          RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this,RecyclerView.HORIZONTAL,false);
          popularfood.setLayoutManager(layoutManager);
          popularFoodAdapter = new PopularFoodAdapter(this,popularFoodList);
          popularfood.setAdapter(popularFoodAdapter);
    }
    private void setAsiafoodadapter(List<AsiaFood> popularFoodList){
        asiaRecycler = (RecyclerView)findViewById(R.id.asiafoodrecycler);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this,RecyclerView.VERTICAL,false);
        asiaRecycler.setLayoutManager(layoutManager);
        asiafoodadapter = new AsiaFoodAdapter(this,popularFoodList);
        asiaRecycler.setAdapter(asiafoodadapter);
    }
}