# Installation instructions

yarn && cd ios && pod install && cd .. && npx react-native run-ios

# Task review 
- I've completed the task using redux. I filtered the music videos in the selector. You can find the filtering functions inside the utils and selector folder.
For Api fetching I used react query. For handling loading state and error handling I wrapped the homescreen inside a helper function. I did not handle the lanscape mode because of I did not want to install orientation detector library. Inside the config file you can see numberOfColumns for iphone landscape mode All I need to do was multiyply that constant by two in order the support landscape mode. I would love to finish this task with tdd but unfournately I did not had time for that. But if you are interested look the way I develop with tdd I can invite you to the my github repos. In addition I could not spend to much time for UI. I tried to keep it simpe and fast. 

In general I kind a enjoyed this task. There wasn't any repetitive tasks of in the challenge and coverage was really good. 

Looking forwad to hear your feedbacks.