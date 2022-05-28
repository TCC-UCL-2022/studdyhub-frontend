import { ActivityType, IActivity } from "@/services/activities";

export const activityMock: IActivity[] = [
  {
    id: "1",
    title: "Activity 1",
    description: "Activity 1 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    type: ActivityType.ARTICLE,
    content: "jkhasjdkashjdbjlahdjahsjkdashdk",
  },
  {
    id: "2",
    title: "Activity 2",
    description: "Activity 2 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    content:
      "https://studdyhub-video-output.s3.us-east-1.amazonaws.com/teste-final2_360.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQDHfprTj6e7K1QLoptJN8RSsN67O%2BpJMc27GaqoSHiXMgIgTVeJdZnVRWxL1v2wQnVc%2FfQFqdFRK1eTDd%2F2fWIaZTIq7QIIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNDU4MDYwNzI3NzEiDI0dzSULXgW6VpJvECrBAq%2FKZULhy5Hczxrbgg7%2FQ01GiE08vziR6axYUz4fZKWDkKzDvJWsDYrdXgHe%2BTzqJy3fbMetduIxFr3nAYhXryQWJNrA11aQ50S9nYrpsFYpxa16D%2FeQzn%2FiXK5T0FhSX3IDiOjQ2kvkLYDPfp4WO%2F%2F2AUfUQ7W8aNvPJr980elis9%2FsqBEsUc%2FKT6cervoXutTOkb72mk1057GZ%2B5KmmMnn3TEHE1SUYakrPVJf1O2yov%2BBZHinH%2F%2BWLxlTK%2B3%2FKKmtjv%2B7oDBFiCC8qCrBDyS%2BFBrKCUqaZQLYDfaABsRdR4m%2BAA9YBJQaB7fM4QoBYy6hY0t3letJH84Hfp6Xy7Ur%2B9Kh8rhLu5dan4vblLljhNLAvxgVZHJP2cd4w67cbgVkj8L88PF9qTWsbm9ERgaFRm19R1IXBxdDI%2FIQrfkp4TDAgsCUBjqzAqjMNWXMhgcN7LsxzzfuiMwH%2BDlCCNLpyIC0a17Zpb307jc4PggLqDBUhQ7i4WbE0BMoyyL6oRXTE1Ff5QGmqdA1iwX9moyd4%2BehmsgIbf9pNUhxkYc3z7L8vBTgFEInJaZDX4E75LRuEbYOqzWQ4mwpNRSkB3e44JI%2BOfIdaumjVSL9JgGJO4%2Flo%2BUT8%2Fnaj%2BK26z4xFzm5Z9XEfdTNTDlHzKXBu1f%2BSY1DK8aAI3RlXXonHPCntajH8mctl7%2FT9jzfQk7baMBF0guyp1Ofv309q0ZaTajodLc9Be1lY7xT3qMDEvpNuUDWXcKwuoIzx8oZjtCrh5LHTEG8nUVfiTXlwUlc4sXKyRoYFbobDee2Fe31AW7vykRGtLmTFBwCap6hL4bEc9JoKJrlL%2B5q3UM8c1k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220526T223841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIATSOZPAPB4FFO3AWA%2F20220526%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=708512646c34138b8a878043c9ee25367998f7688bfaafe8a0f153c36c80e3ab",
    type: ActivityType.VIDEO,
  },
  {
    id: "3",
    title: "Activity 1",
    description: "Activity 1 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    type: ActivityType.ARTICLE,
    content: "jkhasjdkashjdbjlahdjahsjkdashdk",
  },
  {
    id: "4",
    title: "Activity 2",
    description: "Activity 2 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    content:
      "https://studdyhub-video-output.s3.us-east-1.amazonaws.com/teste-final2_360.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQDHfprTj6e7K1QLoptJN8RSsN67O%2BpJMc27GaqoSHiXMgIgTVeJdZnVRWxL1v2wQnVc%2FfQFqdFRK1eTDd%2F2fWIaZTIq7QIIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNDU4MDYwNzI3NzEiDI0dzSULXgW6VpJvECrBAq%2FKZULhy5Hczxrbgg7%2FQ01GiE08vziR6axYUz4fZKWDkKzDvJWsDYrdXgHe%2BTzqJy3fbMetduIxFr3nAYhXryQWJNrA11aQ50S9nYrpsFYpxa16D%2FeQzn%2FiXK5T0FhSX3IDiOjQ2kvkLYDPfp4WO%2F%2F2AUfUQ7W8aNvPJr980elis9%2FsqBEsUc%2FKT6cervoXutTOkb72mk1057GZ%2B5KmmMnn3TEHE1SUYakrPVJf1O2yov%2BBZHinH%2F%2BWLxlTK%2B3%2FKKmtjv%2B7oDBFiCC8qCrBDyS%2BFBrKCUqaZQLYDfaABsRdR4m%2BAA9YBJQaB7fM4QoBYy6hY0t3letJH84Hfp6Xy7Ur%2B9Kh8rhLu5dan4vblLljhNLAvxgVZHJP2cd4w67cbgVkj8L88PF9qTWsbm9ERgaFRm19R1IXBxdDI%2FIQrfkp4TDAgsCUBjqzAqjMNWXMhgcN7LsxzzfuiMwH%2BDlCCNLpyIC0a17Zpb307jc4PggLqDBUhQ7i4WbE0BMoyyL6oRXTE1Ff5QGmqdA1iwX9moyd4%2BehmsgIbf9pNUhxkYc3z7L8vBTgFEInJaZDX4E75LRuEbYOqzWQ4mwpNRSkB3e44JI%2BOfIdaumjVSL9JgGJO4%2Flo%2BUT8%2Fnaj%2BK26z4xFzm5Z9XEfdTNTDlHzKXBu1f%2BSY1DK8aAI3RlXXonHPCntajH8mctl7%2FT9jzfQk7baMBF0guyp1Ofv309q0ZaTajodLc9Be1lY7xT3qMDEvpNuUDWXcKwuoIzx8oZjtCrh5LHTEG8nUVfiTXlwUlc4sXKyRoYFbobDee2Fe31AW7vykRGtLmTFBwCap6hL4bEc9JoKJrlL%2B5q3UM8c1k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220526T223841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIATSOZPAPB4FFO3AWA%2F20220526%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=708512646c34138b8a878043c9ee25367998f7688bfaafe8a0f153c36c80e3ab",
    type: ActivityType.VIDEO,
  },
  {
    id: "5",
    title: "Activity 1",
    description: "Activity 1 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    type: ActivityType.ARTICLE,
    content: "jkhasjdkashjdbjlahdjahsjkdashdk",
  },
  {
    id: "6",
    title: "Activity 2",
    description: "Activity 2 description",
    active: true,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    content:
      "https://studdyhub-video-output.s3.us-east-1.amazonaws.com/teste-final2_360.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQDHfprTj6e7K1QLoptJN8RSsN67O%2BpJMc27GaqoSHiXMgIgTVeJdZnVRWxL1v2wQnVc%2FfQFqdFRK1eTDd%2F2fWIaZTIq7QIIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNDU4MDYwNzI3NzEiDI0dzSULXgW6VpJvECrBAq%2FKZULhy5Hczxrbgg7%2FQ01GiE08vziR6axYUz4fZKWDkKzDvJWsDYrdXgHe%2BTzqJy3fbMetduIxFr3nAYhXryQWJNrA11aQ50S9nYrpsFYpxa16D%2FeQzn%2FiXK5T0FhSX3IDiOjQ2kvkLYDPfp4WO%2F%2F2AUfUQ7W8aNvPJr980elis9%2FsqBEsUc%2FKT6cervoXutTOkb72mk1057GZ%2B5KmmMnn3TEHE1SUYakrPVJf1O2yov%2BBZHinH%2F%2BWLxlTK%2B3%2FKKmtjv%2B7oDBFiCC8qCrBDyS%2BFBrKCUqaZQLYDfaABsRdR4m%2BAA9YBJQaB7fM4QoBYy6hY0t3letJH84Hfp6Xy7Ur%2B9Kh8rhLu5dan4vblLljhNLAvxgVZHJP2cd4w67cbgVkj8L88PF9qTWsbm9ERgaFRm19R1IXBxdDI%2FIQrfkp4TDAgsCUBjqzAqjMNWXMhgcN7LsxzzfuiMwH%2BDlCCNLpyIC0a17Zpb307jc4PggLqDBUhQ7i4WbE0BMoyyL6oRXTE1Ff5QGmqdA1iwX9moyd4%2BehmsgIbf9pNUhxkYc3z7L8vBTgFEInJaZDX4E75LRuEbYOqzWQ4mwpNRSkB3e44JI%2BOfIdaumjVSL9JgGJO4%2Flo%2BUT8%2Fnaj%2BK26z4xFzm5Z9XEfdTNTDlHzKXBu1f%2BSY1DK8aAI3RlXXonHPCntajH8mctl7%2FT9jzfQk7baMBF0guyp1Ofv309q0ZaTajodLc9Be1lY7xT3qMDEvpNuUDWXcKwuoIzx8oZjtCrh5LHTEG8nUVfiTXlwUlc4sXKyRoYFbobDee2Fe31AW7vykRGtLmTFBwCap6hL4bEc9JoKJrlL%2B5q3UM8c1k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220526T223841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIATSOZPAPB4FFO3AWA%2F20220526%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=708512646c34138b8a878043c9ee25367998f7688bfaafe8a0f153c36c80e3ab",
    type: ActivityType.VIDEO,
  },
];