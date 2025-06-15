'use client';

import Accordion from '../components/BVAccordion';

export default function BVTest() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">4-Level Nested Accordion</h1>

      <Accordion title="Level 0 - Main Category" level={0}>
        <p className="text-gray-600 mb-3">Main content area.</p>

        <Accordion title="Level 1 - Subcategory" level={1}>
          <p className="text-gray-600 mb-3">Level 1 content.</p>

          <Accordion title="Level 2 - Detailed Section" level={2}>
            <p className="text-gray-600 mb-3">Level 2 content.</p>

            <Accordion title="Level 3 - Deep Nested Item" level={3}>
              <p className="text-gray-600">This is the deepest level (3).</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Nested item 1</li>
                <li>Nested item 2</li>
                <li>Nested item 3</li>
              </ul>
            </Accordion>
          </Accordion>
        </Accordion>
      </Accordion>

      <Accordion title="Level 0 - Main Category" level={0}>
        <p className="text-gray-600 mb-3">Main content area.</p>

        <Accordion title="Level 1 - Subcategory" level={1}>
          <p className="text-gray-600 mb-3">Level 1 content.</p>

          <Accordion title="Level 2 - Detailed Section" level={2}>
            <p className="text-gray-600 mb-3">Level 2 content.</p>

            <Accordion title="Level 3 - Deep Nested Item" level={3}>
              <p className="text-gray-600">This is the deepest level (3).</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Nested item 1</li>
                <li>Nested item 2</li>
                <li>Nested item 3</li>
              </ul>
            </Accordion>
          </Accordion>
        </Accordion>

        <Accordion title="Level 1 - Subcategory" level={1}>
          <p className="text-gray-600 mb-3">Level 1 content.</p>
        </Accordion>

        <Accordion title="Level 1 - Subcategory" level={1}>
          <p className="text-gray-600 mb-3">Level 1 content.</p>

          <Accordion title="Level 2 - Detailed Section" level={2}>
            <p className="text-gray-600 mb-3">Level 2 content.</p>
          </Accordion>

          <Accordion title="Level 2 - Detailed Section" level={2}>
            <p className="text-gray-600 mb-3">Level 2 content.</p>
          </Accordion>
        </Accordion>
      </Accordion>

      <Accordion title="Level 0 - Main Category" level={0}>
        <p className="text-gray-600 mb-3">Main content area.</p>

        <Accordion title="Level 1 - Subcategory" level={1}>
          <p className="text-gray-600 mb-3">Level 1 content.</p>

          <Accordion title="Level 2 - Detailed Section" level={2}>
            <p className="text-gray-600 mb-3">Level 2 content.</p>

            <Accordion title="Level 3 - Deep Nested Item" level={3}>
              <p className="text-gray-600">This is the deepest level (3).</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Nested item 1</li>
                <li>Nested item 2</li>
                <li>Nested item 3</li>
              </ul>
            </Accordion>
          </Accordion>
        </Accordion>
      </Accordion>
    </div>
  );
}

// "use client"

// import { useState } from 'react';
// import Accordion from '../components/BVAccordion';

// export default function BVTest() {
//   const [openStates, setOpenStates] = useState({
//     'level0': true,
//     'level1': true,
//     'level2': true,
//     'level3': false
//   });

//   const handleToggle = (level: string) => (isOpen: boolean) => {
//     setOpenStates(prev => ({ ...prev, [level]: isOpen }));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">4-Level Nested Accordion</h1>

//       <Accordion
//         title="Level 0 - Main Category"
//         level={0}
//         isOpen={openStates.level0}
//         onToggle={handleToggle('level0')}
//       >
//         <p className="text-gray-600 mb-3">Main content area.</p>

//         <Accordion
//           title="Level 1 - Subcategory"
//           level={1}
//           isOpen={openStates.level1}
//           onToggle={handleToggle('level1')}
//         >
//           <p className="text-gray-600 mb-3">Level 1 content.</p>

//           <Accordion
//             title="Level 2 - Detailed Section"
//             level={2}
//             isOpen={openStates.level2}
//             onToggle={handleToggle('level2')}
//           >
//             <p className="text-gray-600 mb-3">Level 2 content.</p>

//             <Accordion
//               title="Level 3 - Deep Nested Item"
//               level={3}
//               isOpen={openStates.level3}
//               onToggle={handleToggle('level3')}
//             >
//               <p className="text-gray-600">This is the deepest level (3).</p>
//               <ul className="list-disc pl-5 mt-2">
//                 <li>Nested item 1</li>
//                 <li>Nested item 2</li>
//                 <li>Nested item 3</li>
//               </ul>
//             </Accordion>
//           </Accordion>
//         </Accordion>
//       </Accordion>
//     </div>
//   );
// }
