package com.lifebricksy.domain;

import com.google.gson.annotations.Expose;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity
@Table(name = "goal", schema = "life_bricksy")
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    @Expose
    private Long id;

    @Getter(onMethod = @_(@NotNull))
    @Column(name = "name")
    private String name;

    @Getter(onMethod = @__(@NotNull))
    @Column(name = "tag")
    private String tag;

    @Getter(onMethod = @__(@NotNull))
    @Column(name = "goal")
    private Long goal;

    @Getter(onMethod = @__(@NotNull))
    @Column(name = "progress")
    private Long progress;

}
