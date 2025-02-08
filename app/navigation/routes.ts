interface item {
  id: string;
  title: string;
  price: string;
  images: string[] | undefined;
}

export type routeParamList = {
  ProductScreen: item;
  MessagesScreen: undefined;
  ListingScreen: undefined;
  ProductUpdateScreen: undefined;
};

export default Object.freeze({
  PRODUCTSCREEN: 'ProductScreen',
  MESSAGESSCREEN: 'MessagesScreen',
  LISTINGSCREEN: 'ListingScreen',
  PRODUCTUPDATESCREEN: "ProductUpdateScreen",
});
