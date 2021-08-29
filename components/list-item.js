const ListItem = ({ name, level, wearloc }) => {
  return (
    <div class='flex space-x-4 h-16 w-full rounded p-4 items-center cursor-pointer bg-white font-mono'>
      <div class='flex-1'>Name: {name}</div>
      <div class='flex-1'>Wearable: {wearloc}</div>
      <div class='flex-2'>Level: {level}</div>
    </div>
  );
};

export default ListItem;
