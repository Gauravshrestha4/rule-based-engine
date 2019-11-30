RULE BASED ENGINE

This engine is responsible for notifying users who are running multiple campaigns (ads etc), about the status of their rule, which they have set up for their campaign.

It has following actions:

1. User posts a rule in which he/she posts the min/max values of various metrics (installs, spend, impressions, clicks),for rule to stop executing.
2. Per minute metric data is saved in database.
3. Rule executor service runs every 15mins, extract the rules from the database, which have to be run at that moment, and compare the rule's value of metric and actual value of metric. If the user's criteria meets, it sends an email to user to notify the status.


Technologies used: 
1. Nodejs
2. Reactjs
3. MongoDB
