/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.madlabs.investments.models;

import io.swagger.annotations.ApiModelProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
public class User {
  @Id
  @ApiModelProperty(notes = "The auto-generated id of the asset")
  public ObjectId _id;
 
  @ApiModelProperty(notes = "the name or name of asset")
  public String name;
 
  // Constructors
  public User() {}
 
  public User(ObjectId _id, String name) {
    this._id = _id;
    this.name = name;

  }
 
}