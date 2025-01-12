import PropTypes from 'prop-types'

function List(props) {
  const itemList = props.items;
  const category = props.category;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
  //   itemList.sort((a, b) => a.level - b.level) //numeric order

  //   const lowLevelFriends = itemList.filter((friend) => friend.level < 60);
  //   const highLevelFriends = itemList.filter((friend) => friend.level > 60);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;{item.level}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  items: [],
  category: "Category",
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, level: PropTypes.number}))
}

export default List;
