import React from 'react';
import Layout1 from '../Layout01.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Layout1', function() {

    const renderedComp = TestUtils.createRenderer();
    const compRendered = renderedComp.render(<Layout1 />);
    const result_tag = renderedComp.getRenderOutput();
    const layout1 = TestUtils.renderIntoDocument(<Layout1/>);
    const renderedDOM = () => React.findDOMNode(layout1);
    
    it('renders the tag', function() {
        expect(result_tag.type).toBe('div')
    })

    it("find element with tag", function() {

        var root = TestUtils.renderIntoDocument(<Layout1/>);
        // scryRenderedComponentsWithType
        var compglbHeader = TestUtils.scryRenderedComponentsWithType(root, GlobalHeader);
        expect(compglbHeader.length).toEqual(1);
        var pgeHeader = TestUtils.scryRenderedComponentsWithType(root, PageHeader);
        expect(pgeHeader.length).toEqual(1);
    });

})
