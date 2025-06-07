const detailsData = [
    {
    title: "Information",
    html: `
    <p>Fabric: High-quality thick polyester</p>
    <p>Teacup lace: Exclusive, designed by <strong>Antygea</strong>, <em>made in Poland</em></p>
    <p>Each order comes with <strong>print-themed stickers</strong></p>

    <p>Dress includes:</p>
    <ul>
        <li>chiffon belt</li>
        <li>frill made from chiffon</li>
        <li>custom lace</li>
        <li>full lining (polyester outer, cotton lining)</li>
        <li>partially shirred</li>
        <li>side zipper (non-invisible)</li>
        <li>2 deep pockets</li>
        <li>2 detachable bows</li>
    </ul>

    <p>Dress is available in:</p>
    <ul>
        <li><strong>Blue</strong> (Rich, cool shade)</li>
        <li><strong>Pink</strong> (Pale, slightly peachy)</li>
        <li><strong>Red</strong>  (deep wine red, elegant and bold)</li>
    </ul>

    <p>Colour may vary slightly due to monitor settings.</p>
    `
    },
    {
    title: "Size",
    html: `
    <div class="table-wrapper">
        <table class="size-table">
            <thead>
                <tr>
                <th>Size</th>
                <th>Bust</th>
                <th>Under bust</th>
                <th>Waist</th>
                <th>Back width</th>
                <th>Bodice length</th>
                <th>Skirt length</th>
                <th>Bottom</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td data-label="Size">S</td>
                <td data-label="Bust">86 (+5cm)</td>
                <td data-label="Under bust">75</td>
                <td data-label="Waist">65</td>
                <td data-label="Back width">37</td>
                <td data-label="Bodice length">38</td>
                <td data-label="Skirt length">58</td>
                <td data-label="Bottom">250</td>
                </tr>
                <tr>
                <td data-label="Size">M</td>
                <td data-label="Bust">91 (+5cm)</td>
                <td data-label="Under bust">80</td>
                <td data-label="Waist">71</td>
                <td data-label="Back width">38</td>
                <td data-label="Bodice length">38</td>
                <td data-label="Skirt length">60</td>
                <td data-label="Bottom">250</td>
                </tr>
                <tr>
                <td data-label="Size">L</td>
                <td data-label="Bust">96 (+5cm)</td>
                <td data-label="Under bust">86</td>
                <td data-label="Waist">78</td>
                <td data-label="Back width">39</td>
                <td data-label="Bodice length">40</td>
                <td data-label="Skirt length">60</td>
                <td data-label="Bottom">250</td>
                </tr>
                <tr>
                <td data-label="Size">XL</td>
                <td data-label="Bust">102 (+5cm)</td>
                <td data-label="Under bust">92</td>
                <td data-label="Waist">86</td>
                <td data-label="Back width">40</td>
                <td data-label="Bodice length">40</td>
                <td data-label="Skirt length">60</td>
                <td data-label="Bottom">250</td>
                </tr>
                <tr>
                <td data-label="Size">2XL</td>
                <td data-label="Bust">108 (+5cm)</td>
                <td data-label="Under bust">98</td>
                <td data-label="Waist">94</td>
                <td data-label="Back width">41</td>
                <td data-label="Bodice length">42</td>
                <td data-label="Skirt length">60</td>
                <td data-label="Bottom">250</td>
                </tr>
            </tbody>
            </table>
    </div>
    <p>Custom size available for bigger sizes (no limit)</p>
    <p>For custom sizes, please <a href="#">Contact</a> us.</p>
    `
    },
    {
    title: "Description",
    html: `
      <p>
        Inspired by the warmth of childhood afternoons and the charm of vintage parlours, 
        <strong>“Tea Time at Grandma’s”</strong> captures a timeless moment in fabric form.
      </p>
      <p>
        The print features lovingly illustrated porcelain teacups, lace-trimmed napkins, and jam-filled pastries, 
        reminiscent of a cozy teatime ritual shared across generations. 
        Delicate florals and antique tableware wrap the skirt in gentle nostalgia.
      </p>
      <p>
        This dress was designed to evoke the feeling of being wrapped in your grandmother’s embrace – 
        soft, sweet, and a little whimsical.
      </p>
      <p>
        Whether you're hosting your own tea party or simply walking through a summer garden, 
        this JSK invites you to slow down and sip life gently.
      </p>
    `
    },
    {
    title: "Shipping",
    html: `
      <p>All items are shipped from Poland via priority tracked mail.</p>
      <p>Processing time: <strong>2–5 business days</strong></p>
      <p>Estimated delivery:</p>
      <ul>
        <li>Europe: 3–10 business days</li>
        <li>North America: 5–15 business days</li>
        <li>Asia & Oceania: 7–20 business days</li>
      </ul>
      <p>
        Shipping costs are calculated at checkout based on your region and postal code. 
      </p>
      <p>
        We offer both standard and tracked international options. 
        For special delivery requests, please <a href="#">contact us</a>.
      </p>
      <p>Note: Shipping may take longer during holiday seasons or sale periods.</p>
      <p>Tracking number will be provided upon dispatch.</p>
    `
    },
    {
        title: "Return",
        html: `
        <p>Returns are accepted within <strong>14 days</strong> of delivery.</p>
        <p>Items must be:</p>
        <ul>
            <li>unworn and unwashed</li>
            <li>with original tags attached</li>
            <li>in original packaging</li>
        </ul>
        <p>Custom-sized or altered items are <strong>not eligible</strong> for return.</p>
        <p>Return shipping is the responsibility of the customer unless the item is defective.</p>
        <p>To start a return, please <a href="#">contact us</a> with your order number.</p>
        `
    }
];

const container = document.getElementById('product-details-accordion');
detailsData.forEach(detail => {
  container.appendChild(createTextAccordion(detail.title, detail.html));
});