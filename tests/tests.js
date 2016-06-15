import React from 'react';
import ReactDOM from 'react-dom';
import BooksFeed from '../source/scripts/BooksFeed';
import {substringDescription} from '../source/scripts/lib/lib';


describe('substring description', function () {
    var longDescription = 'investUP (UP) does not source or originate P2P or crowdfunding deals. UP Investments Limited (Firm Reference No. 652631) is authorised and regulated by the Financial Conduct Authority (FCA) as a crowdfunding aggregation platform that facilitates and arranges P2P & crowdfunding investments. Lending to companies is regulated in the UK only under specific circumstances that do not apply to UP. UP facilitates lending to companies, and this activity is not regulated by the FCA. See full risk warning here.';
    it('substrings', function () {
        expect(substringDescription(longDescription)).toBe('investUP (UP) does not source or originate P2P or crowdfunding deals. UP Investments Limited (Firm Reference No.');
    })
})


describe('newsFeed', function () {
    it('loads without problems', function () {
        var divCanvas = document.createElement('div');

        ReactDOM.render(<BooksFeed/>, divCanvas);
        document.body.appendChild(divCanvas);
    })
});