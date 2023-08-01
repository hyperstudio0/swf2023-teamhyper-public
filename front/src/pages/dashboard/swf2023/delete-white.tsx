import { Helmet } from 'react-helmet-async';
// sections
import { ProductCreateView } from 'src/sections/product/view';
import BlacklistCreateView from "../../../sections/add-black/blacklist-create-view";
import BlacklistDeleteView from "../../../sections/delete-black/blacklist-delete-view";
import WhitelistDeleteView from "../../../sections/delete-white/whitelist-delete-view";

// ----------------------------------------------------------------------

export default function DeleteWhitePage() {
  return (
    <>
      <Helmet>
        <title> HYPER BLOCK</title>
      </Helmet>

      <WhitelistDeleteView />
    </>
  );
}
