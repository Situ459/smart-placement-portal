package com.placement.smartplacementportal.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.placement.smartplacementportal.service.DashboardService;

@RestController
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/dashboard/admin")
    public Map<String, Long> getAdminDashboard() {
        return dashboardService.getAdminDashboard();
    }
}