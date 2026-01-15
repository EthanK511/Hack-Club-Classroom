# 🎓 Hack Club Classroom

A collaborative learning platform built with Hack Club branding - an open-source alternative to Google Classroom designed for students and teachers who want to learn and build together.

![Hack Club Classroom](https://cloud-c3d3hehz1-hack-club-bot.vercel.app/0image.png)

## ✨ Features

### For Teachers
- 📚 **Class Management** - Create and organize multiple classes
- 📝 **Assignments** - Create assignments with due dates and point values
- 💬 **Announcements** - Share updates and communicate with students
- 📊 **Grading** - Review submissions and provide feedback
- 👥 **Student Management** - Track student enrollment and progress

### For Students
- 🎯 **Easy Submissions** - Submit assignments directly through the platform
- 🔔 **Notifications** - Stay updated on new assignments and grades
- 📅 **Calendar View** - Keep track of all upcoming due dates
- 💼 **Portfolio** - Build your learning portfolio over time

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EthanK511/Hack-Club-Classroom.git
cd Hack-Club-Classroom
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Hack Club Branding

This project uses official Hack Club brand guidelines:
- **Primary Color**: `#EC3750` (Hack Red)
- **Secondary Colors**: `#338EDA` (Blue), `#33D6A6` (Green), `#FFCD38` (Yellow)
- **Background**: `#0D0D0D` (Near Black) and White
- **Font**: Phantom Sans

Learn more at [hackclub.com/brand](https://hackclub.com/brand/)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Phantom Sans (Hack Club's official font)

## 📁 Project Structure

```
Hack-Club-Classroom/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── login/               # Login page
│   ├── signup/              # Signup page
│   ├── dashboard/           # Dashboard (class list)
│   └── class/[id]/          # Individual class pages
│       ├── page.tsx         # Class stream/classwork/people
│       └── assignment/[assignmentId]/
│           └── page.tsx     # Assignment detail & submission
├── components/              # Reusable React components
├── lib/                     # Utility functions
├── public/                  # Static assets
└── types/                   # TypeScript type definitions
```

## 🌟 Key Pages

- **Landing Page** (`/`) - Marketing page with features and call-to-action
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - New user registration (teacher/student)
- **Dashboard** (`/dashboard`) - View all enrolled/created classes
- **Class Stream** (`/class/[id]`) - Class announcements and updates
- **Classwork** (`/class/[id]?tab=classwork`) - View all assignments
- **Assignment** (`/class/[id]/assignment/[assignmentId]`) - Submit/grade assignments

## 🤝 Contributing

Contributions are welcome! This is a community-driven project built for the Hack Club community.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- Built with ❤️ by the Hack Club community
- Inspired by Google Classroom
- Branding from [Hack Club](https://hackclub.com)

## 📞 Support

For questions or support, reach out to the Hack Club community on [Slack](https://hackclub.com/slack)

---

**Built by hackers, for hackers** 🚀
