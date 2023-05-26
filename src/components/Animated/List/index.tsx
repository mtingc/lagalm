import AnimatedListItem from "@/components/Animated/Item";

interface AnimatedListProps {
  items: React.ReactNode[];
}

const AnimatedList: React.FC<AnimatedListProps> = ({ items }) => {
  const animateItems = (items: React.ReactNode[]) => {
    if (items.length === 0) return null;

    const [first, ...rest] = items;

    return (
      <AnimatedListItem>
        {first}
        {animateItems(rest)}
      </AnimatedListItem>
    );
  };

  return <div>{animateItems(items)}</div>;
};

export default AnimatedList;
