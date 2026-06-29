# Basketball Scoreboard

A simple and interactive basketball scoreboard built with **HTML, CSS, and JavaScript** that keeps track of the scores for both the **Home** and **Guest** teams.

Users can update each team's score using dedicated **+1**, **+2**, and **+3** buttons, making it a clean and easy way to simulate live basketball scoring.

## Features

- Separate scoreboards for Home and Guest teams
- Increase scores by **1**, **2**, or **3** points
- Independent score tracking for each team
- Digital scoreboard display using a custom font
- Responsive and clean basketball-themed interface

## How It Works

- Click **+1** to add one point to the selected team's score
- Click **+2** to add two points
- Click **+3** to add three points
- Home and Guest scores update independently without affecting each other

### Example

- Click **HOME +3** → Home score becomes `3`
- Click **HOME +2** → Home score becomes `5`
- Click **GUEST +1** twice → Guest score becomes `2`

Final Score:

- Home: **5**
- Guest: **2**

## Project Structure

```bash
.
├── digital_7/
│   ├── digital-7.ttf
│   ├── digital-7 (mono).ttf
│   ├── digital-7 (italic).ttf
│   ├── digital-7 (mono italic).ttf
│   └── readme.txt
├── index.html
├── index.css
├── index.js
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Future Improvements

- Add a **Reset** button
- Highlight the team currently leading
- Add a game timer
- Track fouls and timeouts
- Support quarter-based scoring
- Make the layout fully responsive for mobile devices