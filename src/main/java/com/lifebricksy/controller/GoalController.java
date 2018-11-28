package com.lifebricksy.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lifebricksy.domain.Goal;
import com.lifebricksy.logic.service.GoalService;
import com.lifebricksy.repository.GoalRepository;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/life-bricksy")
public class GoalController {

    @Autowired
    GoalService goalService;

    @ResponseBody
    @PostMapping(value = "add-new-goal")
    public String addGoal(@RequestBody String json) {

        log.info("Start save new goal from json: {}.", json);

        try {
            ObjectMapper mapper = new ObjectMapper();
            Goal goal = mapper.readValue(json, new TypeReference<Goal>() {

            });

            log.info("new goal to save: {}", goal);
            goalService.saveNewGoal(goal);


            return "Ok";
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @ResponseBody
    @GetMapping(value = "get-all-goal")
    public String getAllGoalFromDb() {
        log.info("Start get all Goal");
        List<Goal> allGoalList = goalService.getAllGoal();
        try {

            ObjectMapper mapper = new ObjectMapper();
            Goal[] goalArray = allGoalList.toArray(new Goal[0]);

            String jsonString = mapper.writeValueAsString(goalArray);
            log.info("URL \"get-all-goal\" return json: {}",jsonString);
            return jsonString;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
