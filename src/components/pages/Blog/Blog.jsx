const Blog = () => {
  return (
    <div className="container mx-auto lg:py-32 h-screen font-custom-100">
      <div className="grid gap-8 grid-cols-2">
        <div className="card shadow-2xl">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                A refresh token is a special token that is used to obtain additional access tokens
              </p>
            </div>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work
            </div>
            <div className="collapse-content">
              <p>
              In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.
              </p>
            </div>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest.js?
            </div>
            <div className="collapse-content">
              <p>
              Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your applications functionality with middleware and routing. 
              </p>
              <br />
              <p>
              NestJS is a progressive Node.js framework that helps build server-side applications. Nest extends Node.js frameworks like Express or Fastify adding modular organization and a wide range of other libraries to take care of repetitive tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
              <p>
              SQL is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases.
              </p>
              <br />
              <p>
              NoSQL stands for Not only SQL. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
