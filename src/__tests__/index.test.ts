import { getCsvString } from '../index';

describe('getCsvString', () => {
  it('should return the correct CSV string representation of a table', () => {
    // Set up the HTML table in the DOM
    document.body.innerHTML = `
      <table id="test-table">
        <tr>
          <td>Header 1</td>
          <td>Header 2</td>
        </tr>
        <tr>
          <td>Row 1 Column 1</td>
          <td>Row 1 Column 2</td>
        </tr>
        <tr>
          <td>Row 2 Column 1</td>
          <td>Row 2 Column 2</td>
        </tr>
      </table>
    `;

    // Call the getCsvString function and check the result
    const csv = getCsvString('test-table');
    expect(csv).toBe('Header 1,Header 2\nRow 1 Column 1,Row 1 Column 2\nRow 2 Column 1,Row 2 Column 2\n');
  });
});
