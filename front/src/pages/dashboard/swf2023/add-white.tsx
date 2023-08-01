import { Helmet } from 'react-helmet-async';
// sections
import { ProductCreateView } from 'src/sections/product/view';
import WhitelistCreateView from "../../../sections/add-white/whitelist-create-view";

// ----------------------------------------------------------------------

export default function AddWhitePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new product</title>
      </Helmet>

      <WhitelistCreateView />
    </>
  );
}
