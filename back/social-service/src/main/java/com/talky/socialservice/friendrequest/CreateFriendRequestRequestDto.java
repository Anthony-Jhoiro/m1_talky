package com.talky.socialservice.friendrequest;

import lombok.Data;

import java.util.UUID;

@Data
class CreateFriendRequestRequestDto {
  private UUID recipient;
}
