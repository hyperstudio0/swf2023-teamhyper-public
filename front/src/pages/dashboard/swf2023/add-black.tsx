import { Helmet } from 'react-helmet-async';
// sections
import { ProductCreateView } from 'src/sections/product/view';
import BlacklistCreateView from "../../../sections/add-black/blacklist-create-view";

// ----------------------------------------------------------------------

export default function AddBlackPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new product</title>
      </Helmet>

      <BlacklistCreateView />
    </>
  );
}
