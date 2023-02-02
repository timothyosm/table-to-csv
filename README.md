<p>Convert HTML tables to CSV files</p>
<p><strong>htmlTableToCsv()</strong></p>
<pre><code>&lt;table id="my-table"&gt;
  &lt;tr&gt;
    &lt;th&gt;Column 1&lt;/th&gt;
    &lt;th&gt;Column 2&lt;/th&gt;
    &lt;th&gt;Column 3&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Row 1, Column 1&lt;/td&gt;
    &lt;td&gt;Row 1, Column 2&lt;/td&gt;
    &lt;td&gt;Row 1, Column 3&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Row 2, Column 1&lt;/td&gt;
    &lt;td&gt;Row 2, Column 2&lt;/td&gt;
    &lt;td&gt;Row 2, Column 3&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;button onclick="htmlTableToCsv('my-table', 'table-data')"&gt;Download as CSV&lt;/button&gt;
</code></pre>
<p>When the user clicks the button, the <code>htmlTableToCsv</code> function will be called, converting the data in the HTML table with the ID <code>my-table</code> to a CSV file and downloading it to the user’s computer with the name <code>table-data.csv</code>.</p>
<p><strong>getCsvString()</strong></p>
<p>HTML:</p>
<pre><code>&lt;table id="myTable"&gt;

&lt;tr&gt;

&lt;td&gt;Column 1, Row 1&lt;/td&gt;

&lt;td&gt;Column 2, Row 1&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Column 1, Row 2&lt;/td&gt;

&lt;td&gt;Column 2, Row 2&lt;/td&gt;

&lt;/tr&gt;

&lt;/table&gt;

</code></pre>
<p>JavaScript:</p>
<pre><code>const csvString = getCsvString('myTable');

console.log(csvString);

</code></pre>
<p>The output of the code above would be:</p>
<pre><code>Column 1, Row 1,Column 2, Row 1

Column 1, Row 2,Column 2, Row 2

</code></pre>
