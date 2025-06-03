# Hidden Deals Dashboard

Project Overview: Hidden Property Deals Collection System
This project involves building a system to help a client discover hidden property deals by collecting and serving data from online source.

## Key Features

* Admin dashboard integrated into WordPress (`Hidden Deals` menu item)
* React frontend app embedded inside WP admin
* Displaying the properties deals witht he option of filtering the listings 

---

##  Project Structure

```
/wp-content/plugins/hidden-deals-dashboard
├── dist/                    # React app build output (after `npm run build`)
├── hidden-deals-dashboard.php               # Main WP plugin file
└── README.md
```

---

### 1. Clone the Repository

```bash
git clone this repo
```

### 2. Setup React App

Navigate to the React project directory /admin-dashboard-react (outside the plugin folder):


#### Install dependencies:

```bash
npm install
```

#### Install Material UI:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

For icons (optional):

```bash
npm install @mui/icons-material
```

#### Run for development:

```bash
npm start 
```

#### Build for production:

```bash
npm run build
```

>  After building, copy the output (`/build` folder) into `wp-content/plugins/hidden-deals-dashboard/dist`.

You can rename the folder as needed:

```bash
cp -r build/* ../wp-content/plugins/hidden-deals-dashboard/dist/
```

---

## WordPress Plugin Setup

### 1. Start WordPress (Docker example):

Navigate to the docker compse file dir and run the following commands


```bash
docker-compose up
```

> Make sure your WordPress site is available at `http://localhost:8000`.
### navigate to the created files and place the react build inside a dir named dist inside wp-content/plugins/admin_dashboard/
### copy the php file in threpo inseide the wp-content/plugins/admin_dashboard/admin_dashboard.php


### 3. Activate the Plugin

* Go to WP Admin → Plugins
* Look for **Hidden Deals Dashboard**
* Click **Activate**

---

## Testing It

1. Log into WP Admin.
2. You should see a new menu item: **Hidden Deals**.
3. Click it to open the React-powered dashboard.
4. Try to add it to a post or page as a shortcode [/hidden-deals]


