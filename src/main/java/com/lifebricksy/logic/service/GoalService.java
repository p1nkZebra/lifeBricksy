package com.lifebricksy.logic.service;

import com.lifebricksy.domain.Goal;
import com.lifebricksy.repository.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public class GoalService {
    @Autowired
    GoalRepository goalRepository;

    public void saveNewGoal(Goal goal){
        goalRepository.save(goal);
    }
}
