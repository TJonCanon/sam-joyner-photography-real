# React to Next.js + Tailwind + Supabase Conversion Guide

## Project Setup Rules

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

### 2. Project Structure Migration
- Convert `src/` to `app/` directory structure (App Router)
- Move `index.js/tsx` → `app/page.tsx`
- Convert React Router routes to Next.js file-based routing
- Move `public/` assets directly to Next.js `public/`

## File Conversion Rules

### 3. Component Conversion
- **Keep**: All React components work in Next.js
- **Update**: Import statements from relative to absolute paths where beneficial
- **Add**: `'use client'` directive at top of files using:
  - `useState`, `useEffect`, `useContext`
  - Event handlers (`onClick`, `onChange`, etc.)
  - Browser APIs (`localStorage`, `window`, etc.)
  - Third-party libraries that use browser APIs

### 4. CSS to Tailwind Migration
- **Replace**: CSS classes with Tailwind utility classes
- **Convert**: CSS modules to Tailwind classes
- **Remove**: All custom CSS files after conversion
- **Keep**: Only global styles in `app/globals.css`

**Common Conversions:**
```css
/* Old CSS */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.button { background: #3b82f6; color: white; padding: 12px 24px; }

/* New Tailwind */
className="max-w-6xl mx-auto px-5"
className="bg-blue-500 text-white px-6 py-3"
```

### 5. State Management
- **Client Components**: Use React hooks normally with `'use client'`
- **Server Components**: Use for static content, data fetching
- **Global State**: Consider Zustand or Context API for client-side state
- **Server State**: Use React Query/TanStack Query for API calls

## Supabase Integration Rules

### 6. Authentication Setup
```typescript
// utils/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
export const supabase = createClientComponentClient()

// utils/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
export const createServerSupabaseClient = () => createServerComponentClient({ cookies })
```

### 7. Database Integration
- **Replace**: Any existing API calls with Supabase queries
- **Convert**: REST endpoints to Supabase RPC/queries
- **Update**: Authentication logic to use Supabase Auth
- **Migrate**: User sessions to Supabase session management

### 8. Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Routing Migration Rules

### 9. Route Conversion
- **Convert**: React Router `<Route>` to file-based routing
- **Structure**: 
  ```
  /about → app/about/page.tsx
  /user/:id → app/user/[id]/page.tsx
  /blog/* → app/blog/[...slug]/page.tsx
  ```
- **Navigation**: Replace `<Link>` from React Router with Next.js `Link`
- **Programmatic**: Replace `useNavigate()` with `useRouter()` from `next/navigation`

### 10. Data Fetching Migration
- **Server Components**: Use `async/await` directly in components
- **Client Components**: Use `useEffect` or React Query for data fetching
- **API Routes**: Create in `app/api/` directory for custom endpoints

## Performance Optimization Rules

### 11. Image Optimization
- **Replace**: `<img>` tags with Next.js `<Image>` component
- **Update**: Image imports and optimization
- **Configure**: Image domains in `next.config.js`

### 12. Code Splitting
- **Implement**: Dynamic imports for heavy components
- **Use**: `loading.tsx` files for loading states
- **Add**: `error.tsx` files for error boundaries

## Migration Checklist

### 13. Pre-Migration Audit
- [ ] List all current dependencies
- [ ] Identify client-side vs server-side logic
- [ ] Map current routes to new structure
- [ ] Identify all API endpoints to convert
- [ ] List all custom CSS classes to convert

### 14. Step-by-Step Migration
1. **Setup**: Initialize Next.js project with Tailwind
2. **Components**: Move and convert components (add `'use client'` where needed)
3. **Styling**: Convert CSS to Tailwind classes
4. **Routing**: Implement file-based routing
5. **Supabase**: Set up authentication and database
6. **Data**: Convert API calls to Supabase queries
7. **Testing**: Test all functionality
8. **Optimization**: Add loading states, error handling, SEO

### 15. Common Pitfalls to Avoid
- **Don't**: Add `'use client'` to every component
- **Don't**: Mix client and server components incorrectly
- **Don't**: Forget to handle loading and error states
- **Don't**: Skip TypeScript types for Supabase
- **Don't**: Forget to set up proper environment variables

## Cursor-Specific Instructions

### 16. Prompting Strategy
- **Be Specific**: "Convert this CSS class to Tailwind utilities"
- **Context**: Always provide the full component when asking for conversion
- **Incremental**: Convert one component/feature at a time
- **Validate**: Ask Cursor to explain the conversion reasoning

### 17. Common Cursor Commands
```
Convert this React component to Next.js with 'use client' directive
Convert these CSS styles to Tailwind classes
Set up Supabase authentication for this component
Create a Next.js API route for this functionality
Migrate this React Router setup to Next.js file-based routing
```

## Final Validation Rules

### 18. Testing Checklist
- [ ] All routes work correctly
- [ ] Authentication flows function
- [ ] Database queries return expected data
- [ ] Styling matches original design
- [ ] Performance is optimized
- [ ] SEO meta tags are present
- [ ] Error handling is implemented

### 19. Deployment Preparation
- [ ] Environment variables configured
- [ ] Supabase policies set up
- [ ] Build process completes without errors
- [ ] All TypeScript errors resolved
- [ ] Performance audit passed

## Optimized Photo Manifest (for batch processing)

### Getty Museum
1. Getty Museum 1 — getty-museum-1-card.webp, getty-museum-1-large.webp
2. Getty Museum 2 — getty-museum-2-card.webp, getty-museum-2-large.webp
3. Getty Museum 3 — getty-museum-3-card.webp, getty-museum-3-large.webp
4. Getty Museum 4 — getty-museum-4-card.webp, getty-museum-4-large.webp
5. Getty Museum 5 — getty-museum-5-card.webp, getty-museum-5-large.webp
6. Getty Museum 6 — getty-museum-6-card.webp, getty-museum-6-large.webp
7. Getty Museum 7 — getty-museum-7-card.webp, getty-museum-7-large.webp
8. SJ011 Step2 Flat — sj011-step2-flat-card.webp, sj011-step2-flat-large.webp
9. SJ012 Step2 Flat — sj012-step2-flat-card.webp, sj012-step2-flat-large.webp

### Stairs
1. 320 S. Boston 11 — 320-s-boston-11-card.webp, 320-s-boston-11-large.webp
2. 320 S. Boston 2 — 320-s-boston-2-card.webp, 320-s-boston-2-large.webp
3. Carnegie Mellon Step 2 — carnegie-mellon-step-2-card.webp, carnegie-mellon-step-2-large.webp
4. Ode to Escher Monastery — ode-to-escher-monastery-card.webp, ode-to-escher-monastery-large.webp
5. Getty Museum 3 — getty-museum-3-card.webp, getty-museum-3-large.webp
6. Jpegs 1 — jpegs-1-card.webp, jpegs-1-large.webp
7. Salt Lake City Staircase — salt-lake-city-staircase-card.webp, salt-lake-city-staircase-large.webp
8. SJ012 Step2 Flat — sj012-step2-flat-2-card.webp, sj012-step2-flat-2-large.webp
9. Scanned Neg 1 — scanned-neg-1-card.webp, scanned-neg-1-large.webp
10. Spiral Stairs — spiral-stairs-card.webp, spiral-stairs-large.webp

### Thailand
1. Bud with Cave 2 — bud-with-cave-2-card.webp, bud-with-cave-2-large.webp
2. Bell Temple Buddhist Bangkok — bell-temple-buddhist-bangkok-card.webp, bell-temple-buddhist-bangkok-large.webp
3. Basket Man with Lace Cloth Bali — basket-man-with-lace-cloth-bali-card.webp, basket-man-with-lace-cloth-bali-large.webp
4. SJ010 Step2 Flat — sj010-step2-flat-card.webp, sj010-step2-flat-large.webp
5. Smiling Buddha 2 — smiling-buddha-2-card.webp, smiling-buddha-2-large.webp
6. Untitled 1310 — untitled-1310-card.webp, untitled-1310-large.webp
7. SJ013 Step2 Flat — sj013-step2-flat-card.webp, sj013-step2-flat-large.webp
8. Untitled 1308 — untitled-1308-card.webp, untitled-1308-large.webp
9. Untitled 1309 — untitled-1309-card.webp, untitled-1309-large.webp

### Not Categorized
1. Dogwood — dogwood-card.webp, dogwood-large.webp
2. Harwood Museum 1 — harwood-museum-1-card.webp, harwood-museum-1-large.webp
3. ItraTuppeer — itratuppeer-card.webp, itratuppeer-large.webp
4. Calla Lily 2 — calla-lily-2-card.webp, calla-lily-2-large.webp
5. Philbrook Winter Reflection Jet CP — philbrook-winter-reflection-jet-cp-card.webp, philbrook-winter-reflection-jet-cp-large.webp
6. Rochester Panel Step 2 — rochester-panel-step-2-card.webp, rochester-panel-step-2-large.webp
7. Indian Girl Scanned in Black and White 100 — indian-girl-scanned-in-black-and-white-100-card.webp, indian-girl-scanned-in-black-and-white-100-large.webp
8. Untitled 8 — untitled-8-card.webp, untitled-8-large.webp
9. Untitled 59 3 — untitled-59-3-card.webp, untitled-59-3-large.webp
10. SJ013 Step2 Flat — sj013-step2-flat-2-card.webp, sj013-step2-flat-2-large.webp
11. Texas Jam 008 — texas-jam-008-card.webp, texas-jam-008-large.webp
12. World Peace Begins in the Imagination — world-peace-begins-in-the-imagination-card.webp, world-peace-begins-in-the-imagination-large.webp

// Use this manifest to batch process and rename all images for the gallery.