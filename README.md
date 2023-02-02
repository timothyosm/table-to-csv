<p>This NPM package exports a CSV string from an HTML table. The function takes one parameter <code>tableId</code> which is a string representing the id of the table in the HTML document.</p>
<p>Here’s an example of how you could use the function in your code:</p>
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
