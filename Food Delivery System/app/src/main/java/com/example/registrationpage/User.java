package com.example.registrationpage;

public class User {

    String username;
    String email;
    String password;
    String mobile;

    public User(String username, String email, String password,String mobile)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
    }

    public User(){}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
