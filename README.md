LiftByte Frontend (React + Vite + Tailwind)
------------------------------------------

What I created:
- Vite + React project scaffold (src/, index.html, package.json)
- TailwindCSS config files (tailwind.config.cjs, postcss.config.cjs)
- Components: Sidebar, ControlPanel, ElevatorCard, FloorList, BigDial
- Assets copied from uploaded zip: Emergency Options.png, Floor Password Settings.png, Home Active.png, Home Idle.png, Language & Region.png, Light & Fan Settings.png, Nameplate Settings.png, RGB Lighting Control.png, Select Theme.png, Set Screen Saver.png, Set Screen Sleep Timer.png, Update v2.png, Accessibility Options.png, Accessibility Options-1.png, Adjust Brightness.png, Date & Time Settings.png

How to run locally:
1. cd liftbyte-frontend
2. npm install
3. npx tailwindcss init -p   # only if you want to regenerate config, already included
4. npm run dev
   - Open the URL printed by Vite (usually http://localhost:5173)

Notes:
- This scaffold uses local images from the uploaded ZIP (if any). If the UI in the images needs pixel-perfect replication, open the /src/assets folder and review image names; then edit components to match placements.
- If you want me to convert this to a create-react-app structure or to add more pixel-accurate styling (fonts, exact colors, spacing), tell me which parts need more fidelity and I'll update the code.

