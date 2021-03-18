package com.example.registrationpage;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.ImageView;

public class splashscreen extends AppCompatActivity {
    ImageView img;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splashscreen);
        img  = (ImageView)findViewById(R.id.fooddelivery);
        img.animate().alpha(1000).setDuration(6000);

        Handler handler = new Handler();
        handler.postDelayed(new Runnable(){
            @Override
            public void run() {
                 Intent intent = new Intent(splashscreen.this,LoginActivity.class );
                 startActivity(intent);
            }
        },6000);
    }
}