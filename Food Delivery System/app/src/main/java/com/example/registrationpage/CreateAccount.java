package com.example.registrationpage;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.FirebaseApiNotAvailableException;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;

public class CreateAccount extends AppCompatActivity {
    TextView login;
    TextView username;
    TextView password;
    TextView email;
    TextView mobile;
    ProgressDialog progressDialog;
    FirebaseDatabase database;
    AppCompatButton btn;
    private FirebaseAuth auth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);
        username = (TextView)findViewById(R.id.name);
        email = (TextView)findViewById(R.id.email);
        login = (TextView)findViewById(R.id.login);
        password = (TextView)findViewById(R.id.password);
        mobile = (TextView)findViewById(R.id.mobile);
        auth  = FirebaseAuth.getInstance();
        progressDialog = new ProgressDialog(CreateAccount.this);
        progressDialog.setTitle("Creating Account");
        progressDialog.setMessage("We are setting up your account");
        database = FirebaseDatabase.getInstance();
        btn = (AppCompatButton)findViewById(R.id.signup);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
              progressDialog.show();
              String username1 = username.getText().toString();
              String email1 = email.getText().toString();
              String password1 = password.getText().toString();
              String mobile1 = mobile.getText().toString();

              auth.createUserWithEmailAndPassword(email1,password1).addOnCompleteListener(new OnCompleteListener<AuthResult>(){
                  @Override
                  public void onComplete(@NonNull Task<AuthResult> task) {
                      progressDialog.dismiss();
                      if(task.isSuccessful())
                      {
                          User user = new User(username1,email1,password1,mobile1);
                          String id = task.getResult().getUser().getUid();
                          database.getReference().child("Users").child(id).setValue(user);

                          Intent intent = new Intent(CreateAccount.this, Dashboard.class);
                          startActivity(intent);

                      }
                      else
                      {
                          Toast.makeText(CreateAccount.this, task.getException().getMessage(), Toast.LENGTH_SHORT).show();
                      }
                  }
              });
            }
        });


        login.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(CreateAccount.this,LoginActivity.class);
                startActivity(intent);
            }
        });

    }
}