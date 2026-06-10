package com.placement.smartplacementportal.dto;

public class LoginResponse {

    private String token;
    private String role;
    private String email;

    private Long userId;
    private Long studentId;
    private Long recruiterId;

    public LoginResponse() {
    }

    public LoginResponse(
            String token,
            String role,
            String email,
            Long userId,
            Long studentId,
            Long recruiterId) {

        this.token = token;
        this.role = role;
        this.email = email;
        this.userId = userId;
        this.studentId = studentId;
        this.recruiterId = recruiterId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getRecruiterId() {
        return recruiterId;
    }

    public void setRecruiterId(Long recruiterId) {
        this.recruiterId = recruiterId;
    }
}