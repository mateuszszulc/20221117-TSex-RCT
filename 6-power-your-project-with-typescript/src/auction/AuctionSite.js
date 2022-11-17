import { useDispatch } from 'react-redux';
import { useGetAllAuctionsQuery } from '../services/auctions-api';
import { addToCart } from './cartSlice';

import AuctionItem from './AuctionItem'
import ErrorMessage from '../common/ErrorMessage'
import ItemsCartCounter from './ItemsCartCounter'

function AuctionsSite () {

    const { data: auctions, error, isLoading } = useGetAllAuctionsQuery()
    const dispatch = useDispatch()

    return (
      <div>
          <h2> List of our auctions </h2>
          <ItemsCartCounter/>
          <div className="row mt-2">
              {
                isLoading ? <div className="alert alert-info">Loading...</div> :
                    error ? <ErrorMessage msg={error.error}/> :
                      auctions.map( ( auction ) => (
                        <div key={auction.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <AuctionItem {...auction} moveToCart={(auction) => dispatch(addToCart(auction))}   />
                        </div>
                      ) )
              }
          </div>
      </div>
    )
}

export default AuctionsSite;
