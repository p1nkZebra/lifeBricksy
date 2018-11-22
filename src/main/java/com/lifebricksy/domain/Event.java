package com.lifebricksy.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity
@Table(name = "event", schema = "life_bricksy")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id" , nullable = false , unique = true)
    private Long id;

    @Getter(onMethod =  @__(@NonNull))
    @Column(name = "name")
    private String name;

    @Getter(onMethod =  @__(@NonNull))
    @Column(name = "tag")
    private String tag;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Getter(onMethod = @__(@NotNull))
    @Column(name = "date")
    private LocalDate date;

    @Column(name = "value")
    private Long value;

}
