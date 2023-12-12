// Example.jsx

import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";
const cards = [
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MDA2NjQxNDM&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTcwMDY2NDE2Nw&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE3MDA2NjQxOTQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTcwMDY2NDE2Nw&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE3MDA2NjQxOTQ&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Title 7",
    id: 7,
  },
];


export const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};