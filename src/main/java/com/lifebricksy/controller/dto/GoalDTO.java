package com.lifebricksy.controller.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GoalDTO {

    private String name;
    private String tag;
    private Long goal;
    private Long progress;
}
