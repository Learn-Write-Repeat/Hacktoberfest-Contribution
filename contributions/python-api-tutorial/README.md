<h1><strong>Getting Started with APIs</strong></h1>

<p>An API, or <strong>Application Programming Interface</strong>, is a server that we can use to retrieve and send data to using code. APIs are most commonly used to retrieve data, and that will be the focus of this beginner tutorial.<br />
When we want to receive data from an API, we need to make a&nbsp;<strong>request</strong>. Requests are used all over the web. For instance, when you visited this blog post, your web browser made a request to the iRead web server, which responded with the content of this web page.&nbsp;</p>

<p><img src="https://res.cloudinary.com/dlomjljb6/image/upload/v1/media/blog/uploads/2021/06/04/api-request_rlwgao" /></p>

<p>API requests work in exactly the same way &ndash; you make a request to an API server for data, and it responds to your request.</p>

<p>&nbsp;</p>

<h1><strong>Making API Requests in Python</strong></h1>

<p>In order to work with APIs in Python, we need tools that will make those requests. In Python, the most common library for making requests and working with APIs is the&nbsp;<a href="https://2.python-requests.org/en/master/">requests</a>&nbsp;library. The requests library isn&rsquo;t part of the standard Python library, so we need to install it to get started.</p>

<p>We can install requests using the following command:</p>

<pre>
<code class="language-bash">pip install requests</code></pre>

<p>nce you&rsquo;ve installed the library, you&rsquo;ll need to import it. Let&rsquo;s start with that important step:&nbsp;</p>

<pre>
<code class="language-python">import requests</code></pre>

<p>Now that we&rsquo;ve installed and imported the requests library, let&rsquo;s start using it.<br />
&nbsp;</p>

<h1><strong>Making Our First API Request</strong></h1>

<p>There are many different types of requests. The most commonly used one, a&nbsp;<strong>GET</strong>&nbsp;request, is used to retrieve data. Because we&rsquo;ll just be working with retrieving data, our focus will be on making &lsquo;get&rsquo; requests.</p>

<p>When we make a request, the response from the API comes with a&nbsp;<strong>response code</strong>&nbsp;which tells us whether our request was successful. Response codes are important because they immediately tell us if something went wrong.</p>

<p><img alt="" src="https://web.archive.org/web/20200107014409im_/https://www.dataquest.io/wp-content/uploads/2019/09/api-request.svg" />To make a &lsquo;GET&rsquo; request, we&rsquo;ll use the&nbsp;<a href="https://2.python-requests.org/en/master/user/quickstart/#make-a-request"><code>requests.get()</code>&nbsp;function</a>, which requires one argument &mdash; the URL we want to make the request to. We&rsquo;ll start by making a request to an API endpoint that doesn&rsquo;t exist, so we can see what that response code looks like.&nbsp;</p>

<pre>
<code class="language-python">response = requests.get("https://api.open-notify.org/this-api-doesnt-exist")</code></pre>

<p>The&nbsp;<code>get()</code>&nbsp;function returns a&nbsp;<a href="https://2.python-requests.org/en/master/user/advanced/#request-and-response-objects"><code>response</code>&nbsp;object</a>. We can use the&nbsp;<a href="https://2.python-requests.org/en/master/user/quickstart/#response-status-codes"><code>response.status_code</code></a>&nbsp;attribute to receive the status code for our request:</p>

<pre>
<code class="language-python">print(response.status_code)</code></pre>

<p>&nbsp;</p>

<pre>
<code class="language-bash">404</code></pre>

<p>The &lsquo;404&rsquo; status code might be familiar to you &mdash; it&rsquo;s the status code that a server returns if it can&rsquo;t find the file we requested. In this case, we asked for&nbsp;<code>this-api-doesnt-exist</code>&nbsp;which (surprise, surprise) didn&rsquo;t exist!</p>

<p>Let&rsquo;s learn a little more about common status codes.<br />
&nbsp;</p>

<h1><strong>API Status Codes</strong></h1>

<p>Status codes are returned with every request that is made to a web server. Status codes indicate information about what happened with a request. Here are some codes that are relevant to&nbsp;<em>GET</em>&nbsp;requests:</p>

<ul>
	<li><strong><code>200</code></strong>: Everything went okay, and the result has been returned (if any).</li>
	<li><strong><code>301</code></strong>: The server is redirecting you to a different endpoint. This can happen when a company switches domain names, or an endpoint name is changed.</li>
	<li><strong><code>400</code></strong>: The server thinks you made a bad request. This can happen when you don&rsquo;t send along the right data, among other things.</li>
	<li><strong><code>401</code></strong>: The server thinks you&rsquo;re not authenticated. Many APIs require login ccredentials, so this happens when you don&rsquo;t send the right credentials to access an API.</li>
	<li><strong><code>403</code></strong>: The resource you&rsquo;re trying to access is forbidden: you don&rsquo;t have the right permissions to see it.</li>
	<li><strong><code>404</code></strong>: The resource you tried to access wasn&rsquo;t found on the server.</li>
	<li><strong><code>503</code></strong>: The server is not ready to handle the request.</li>
</ul>

<p>You might notice that all of the status codes that begin with a &lsquo;4&rsquo; indicate some sort of error. The first number of status codes indicate their categorization. This is useful &mdash; you can know that if your status code starts with a &lsquo;2&rsquo; it was successful and if it starts with a &lsquo;4&rsquo; or &lsquo;5&rsquo; there was an error. If you&rsquo;re interested you can&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">read more about status codes here</a>.<br />
&nbsp;</p>

<h1><strong>Working with JSON Data in Python</strong></h1>

<p><a href="https://json.org/">JSON</a>&nbsp;(JavaScript Object Notation) is the language of APIs. JSON is a way to encode data structures that ensures that they are easily readable by machines. JSON is the primary format in which data is passed back and forth to APIs, and most API servers will send their responses in JSON format.</p>

<p>You might have noticed that the JSON output we received from the API looked like it contained Python dictionaries, lists, strings and integers. You can think of JSON as being a combination of these objects represented as strings.&nbsp;</p>

<pre>
<code class="language-json">[
    {
        "model": "core.post",
        "pk": 25,
        "fields": {
            "title": "5 Quick Python Projects",
            "slug": "5-quick-python-projects",
            "timestamp": "2021-05-29T14:32:58.787Z"
        }
    },
    {
        "model": "core.post",
        "pk": 24,
        "fields": {
            "title": "What is Bitcoin or Cryptocurrency and how does it work? ",
            "slug": "what-is-bitcoin-or-cryptocurrency-and-how-does-it-work",
            "timestamp": "2021-05-28T11:42:59.758Z"
        }
    }
]</code></pre>

<p>Python has great JSON support with the&nbsp;<a href="https://docs.python.org/3/library/json.html"><code>json</code>&nbsp;package</a>. The&nbsp;<code>json</code>&nbsp;package is part of the standard library, so we don&rsquo;t have to install anything to use it. We can both convert&nbsp;<em>lists</em>&nbsp;and&nbsp;<em>dictionaries</em>&nbsp;to JSON, and convert strings to&nbsp;<em>lists</em>&nbsp;and&nbsp;<em>dictionaries</em>. In the case of our ISS Pass data, it is a dictionary encoded to a string in JSON format.</p>

<p>The json library has two main functions:</p>

<ul>
	<li><a href="https://web.archive.org/web/20200107014409/https://docs.python.org/3/library/json.html#json.dumps"><code>json.dumps()</code></a>&nbsp;&mdash; Takes in a Python object, and converts (dumps) it to a string.</li>
	<li><a href="https://web.archive.org/web/20200107014409/https://docs.python.org/3/library/json.html#json.loads"><code>json.loads()</code></a>&nbsp;&mdash; Takes a JSON string, and converts (loads) it to a Python object.</li>
</ul>

<p>&nbsp;</p>

<h1><strong>Using an API with Query Parameters</strong></h1>

<p>The&nbsp;<code>https://api.open-notify.org/astros.json</code>&nbsp;endpoint we used earlier does not take any parameters. We just send a GET request and the API sends back data about the number of people currently in space.</p>

<p>It&rsquo;s very common, however, to have an API endpoint that requires us to specify parameters. An example of this the&nbsp;<a href="https://open-notify.org/Open-Notify-API/ISS-Pass-Times/"><code>https://api.open-notify.org/iss-pass.json</code>&nbsp;endpoint</a>. This endpoint tells us the next times that the international space station will pass over a given location on the earth.</p>

<p>If we look at the documentation, it specifies required&nbsp;<code>lat</code>&nbsp;(latitude) and&nbsp;<code>long</code>&nbsp;(longitude) parameters.</p>

<p>We can do this by adding an optional keyword argument,&nbsp;<code>params</code>, to our request. We can make a dictionary with these parameters, and then pass them into the&nbsp;<code>requests.get</code>&nbsp;function. Here&rsquo;s what our dictionary would look like, using coordinates for New York City:&nbsp;</p>

<pre>
<code class="language-python">parameters = {
    "lat": 40.71,
    "lon": -74
}</code></pre>

<p>We can also do the same thing directly by adding the parameters directly to the URL. like this:&nbsp;<code>https://api.open-notify.org/iss-pass.json?lat=40.71&amp;lon;=-74</code>.</p>

<p>It&rsquo;s almost always preferable to setup the parameters as a dictionary, because&nbsp;<code>requests</code>&nbsp;takes care of some things that come up, like properly formatting the query parameters, and we don&rsquo;t need to worry about inserting the values into the URL string.</p>

<p>Let&rsquo;s make a request using these coordinates and see what response we get.&nbsp;</p>

<pre>
<code class="language-python">response = requests.get("https://api.open-notify.org/iss-pass.json", params=parameters)

print(response.json())</code></pre>

<pre>
<code class="language-json">{
    'message': 'success',
    'iss_position': {
         'longitude': '-173.5025',
         'latitude': '-50.8654'
    }, 
    'timestamp': 1622818043
}</code></pre>

<h1><br />
<strong>API Example : Getting Vaccination Appointment Availability using Co-WIN API</strong></h1>

<p>Since, we have now learnt what APIs are and know how to use requests library to make API calls, let us test our knowledge with a real example.<br />
Suppose we are building a web app where we want to show users the current available slots for vaccination in a particular PIN Code to the user. For this, we need to fetch data from the API built by <a href="https://apisetu.gov.in/public/marketplace/api/cowin">API Setu</a>&nbsp;and process it accordingly.<br />
Let&#39;s implement this. For this, first we need to import the requests library as :&nbsp;</p>

<pre>
<code class="language-python">import requests</code></pre>

<p>The Base API provided by API Setu is :&nbsp;<code>https://cdn-api.co-vin.in/api</code> and the API endpoint we need to fetch is :&nbsp;<code>/v2/appointment/sessions/public/findByPin</code><br />
We also need to pass two required parameters : <strong>pincode </strong>and <strong>date</strong>. As discussed above, we can pass them as :</p>

<pre>
<code class="language-python">parameters = {
    "pincode": 823003,
    "date": "05-06-2021"
}</code></pre>

<p>Let us also create a function that accepts json data as argument and prints the same data in a way that is easier to read and understand.</p>

<pre>
<code class="language-python">def print_json(data):
    text = json.dumps(data, sort_keys=True, indent=4)
    print(text)</code></pre>

<p>Now that we have our endpoint, parameters and print function ready, we are ready to make the API call :</p>

<pre>
<code class="language-python">import requests
import json

def print_json(data):
    text = json.dumps(data, sort_keys=True, indent=4)
    print(text)

parameters = {
    "pincode": 823003,
    "date": "05-06-2021"
}

response = requests.get(
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin", params=parameters)

print_json(response.json())
</code></pre>

<p>The above code has nothing different than what we have discussed above. We&#39;re making a GET request on the API with our parameters and then passing the JSON response to the print_json function that makes the output readable.</p>

<p>Our response looks like :&nbsp;</p>

<pre>
<code class="language-json">{
    "sessions": [
        {
            "address": "CHC Manpur",
            "available_capacity": 188,
            "available_capacity_dose1": 94,
            "available_capacity_dose2": 94,
            "block_name": "Manpur",
            "center_id": 589831,
            "date": "05-06-2021",
            "district_name": "Gaya",
            "fee": "0",
            "fee_type": "Free",
            "from": "09:00:00",
            "lat": 24,
            "long": 85,
            "min_age_limit": 45,
            "name": "CHC Manpur Covaxin",
            "pincode": 823003,
            "session_id": "61952335-bb69-4fc9-82a0-89f36cd2be3b",
            "slots": [
                "09:00AM-10:00AM",
                "10:00AM-11:00AM",
                "11:00AM-12:00PM",
                "12:00PM-03:00PM"
            ],
            "state_name": "Bihar",
            "to": "15:00:00",
            "vaccine": "COVAXIN"
        },
        {
            "address": "CHC Manpur",
            "available_capacity": 0,
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0,
            "block_name": "Manpur",
            "center_id": 563407,
            "date": "05-06-2021",
            "district_name": "Gaya",
            "fee": "0",
            "fee_type": "Free",
            "from": "09:00:00",
            "lat": 24,
            "long": 85,
            "min_age_limit": 45,
            "name": "CHC Manpur Covishield",
            "pincode": 823003,
            "session_id": "a26a5fb8-fcb3-41af-b5f7-c3175ab7d679",
            "slots": [
                "09:00AM-10:00AM",
                "10:00AM-11:00AM",
                "11:00AM-12:00PM",
                "12:00PM-03:00PM"
            ],
            "state_name": "Bihar",
            "to": "15:00:00",
            "vaccine": "COVISHIELD"
        }
    ]
}</code></pre>

<p>The response is a dictionary that has a key <strong>sessions </strong>and its value is <strong>a list of available slots</strong>.</p>

<p>You can check other APIs from API Setu <a href="https://apisetu.gov.in/public/marketplace/api/cowin">here</a>.<br />
&nbsp;</p>

<h1><strong>Conclusion</strong></h1>

<p>&nbsp;</p>

<p>In this tutorial, we learned:</p>

<ul>
	<li>What an API is</li>
	<li>Types of requests and response codes</li>
	<li>How to make a get request</li>
	<li>How to make a request with parameters</li>
	<li>How to display and extract JSON data from an API</li>
</ul>

<p>These fundamental steps will help you to start working with APIs. Remember that key to each time we used the API was to carefully read the API documentation and use that to understand what request to make and what parameters to provide.</p>

<p>Try working with some data from this list of&nbsp;<a href="https://iread.ga/posts/17/play-with-some-unique-and-fun-apis">Some Unique and Fun APIs</a>&nbsp;&mdash; we recommend selecting an API that doesn&rsquo;t require authentication as a good first step.</p>
