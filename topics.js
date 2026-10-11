const topics = [
  {
    "id": "ai-intro",
    "unit": 1,
    "title": "Introduction to Artificial Intelligence",
    "tag": "Foundations",
    "summary": "Understand what AI studies and how the course frames intelligent behaviour.",
    "content": "Artificial Intelligence (AI) studies how to design computational systems that perform tasks associated with intelligence. Your lecture material presents definitions from John McCarthy, Elaine Rich and Kevin Knight, Winston, and Russell and Norvig. For exam answers, state a definition, explain its meaning, and add a relevant example.",
    "points": [
      "AI aims to build systems that perceive, reason, learn, solve problems, and act.",
      "The lecture notes mention the term Artificial Intelligence being coined by John McCarthy in 1956.",
      "The four classic viewpoints are: thinking humanly, acting humanly, thinking rationally, and acting rationally.",
      "Use the wording and definitions emphasized in your lecturer's material when writing answers."
    ],
    "exam": "Define Artificial Intelligence. Explain the four approaches to AI with examples."
  },
  {
    "id": "history",
    "unit": 1,
    "title": "History and Development of AI",
    "tag": "Timeline",
    "summary": "Trace milestone periods and the changing focus of AI research.",
    "content": "The lecture timeline highlights the naming of AI in 1956, early work on search, games and formal logic, later growth in robotics and knowledge representation, the expert-system industry, and renewed focus on rational agents, probabilistic reasoning and machine learning.",
    "points": [
      "1956: the name Artificial Intelligence was coined.",
      "1960s: search, games, formal logic and theorem proving.",
      "1970s: robotics, perception, knowledge representation and expert systems.",
      "1980s: expert systems expanded and AI became an industry.",
      "1990s: rational agents, probabilistic reasoning and machine learning.",
      "2000s: integrated AI methods, uncertainty reasoning, machine learning and robotics."
    ],
    "exam": "Describe the development of AI through milestone periods."
  },
  {
    "id": "intelligent-systems",
    "unit": 1,
    "title": "Intelligent Systems and Foundations of AI",
    "tag": "Concepts",
    "summary": "Connect intelligent behaviour to the disciplines that underpin AI.",
    "content": "The supplied lecture material identifies mathematics, neuroscience, control theory and linguistics as foundations of AI. These contribute formal reasoning, insight into the brain, feedback and control, and language understanding respectively.",
    "points": [
      "Mathematics: logic, probability and formal methods.",
      "Neuroscience: studies brain function and informs computational models of learning and perception.",
      "Control theory: feedback and goal-directed behaviour in changing environments.",
      "Linguistics: language structure, meaning and communication.",
      "The lecture notes also describe AI as an interdisciplinary field."
    ],
    "exam": "Explain any four foundations of AI."
  },
  {
    "id": "ai-domains",
    "unit": 1,
    "title": "Domains, Subareas and Applications of AI",
    "tag": "Applications",
    "summary": "Organize AI problem domains and give examples from the lecture notes.",
    "content": "The lecture groups AI tasks into mundane (ordinary), formal and expert task domains. It also lists game playing, theorem proving, common-sense reasoning, perception, natural-language understanding, expert systems, speech recognition, vision and robotics.",
    "points": [
      "Mundane tasks: perception, speech, natural language, common sense, reasoning, planning and locomotion.",
      "Formal tasks: mathematics, geometry, logic, theorem proving and games such as chess.",
      "Expert tasks: engineering fault finding, manufacturing, monitoring, scientific analysis, finance and medical diagnosis.",
      "Application examples in the material include recommendation systems, healthcare, face recognition, sentiment analysis, assistants and self-driving cars.",
      "The amended syllabus also names current trends in AI; the detailed trend list should be aligned with the lecturer’s current slides."
    ],
    "exam": "Classify AI task domains and explain applications with examples."
  },
  {
    "id": "current-trends",
    "unit": 1,
    "title": "Development and Current Trends in AI",
    "tag": "Current context",
    "summary": "Connect the historical development of AI to trends emphasized in the course material.",
    "content": "The amended 24CS540 syllabus explicitly includes development of AI and current trends. The uploaded lecture deck gives a historical timeline through the 2000s and examples such as machine learning, reasoning under uncertainty, robotics, recommendation systems, healthcare AI and language technologies. We will expand this topic only from the lecturer's provided/current material, rather than inventing a syllabus-specific trend list.",
    "points": [
      "Review the lecture's historical timeline and identify how AI focus changed over time.",
      "Use examples that appear in the provided slides, such as machine learning, robotics, language technologies and recommendation systems.",
      "Current trend details need lecturer material or confirmation before treating a specific list as examinable."
    ],
    "exam": "Describe the development of AI and discuss current trends with examples."
  },
  {
    "id": "state-space",
    "unit": 2,
    "title": "General Problem Solving & State-Space Search",
    "tag": "Core concept",
    "summary": "Formulate a problem with states, operators, initial state, goal state and a solution path.",
    "content": "A state-space representation models a problem as a collection of states and transitions. States are represented as nodes and legal actions as links. A solution is a sequence of actions taking the system from the initial state to a goal state; an optimal solution minimizes the specified path cost when cost matters.",
    "points": [
      "Identify the initial state and goal state.",
      "Define the legal operators/actions that transform one state into another.",
      "Represent the state space as a graph or search tree.",
      "A common notation in the lecture is [N, A, S, GD]: nodes, arcs, start states and goal states.",
      "Search strategy determines which frontier node is expanded next."
    ],
    "exam": "Define general problem solving and explain state-space representation with a diagram."
  },
  {
    "id": "water-jug",
    "unit": 2,
    "title": "Water-Jug Problem",
    "tag": "Worked problem",
    "summary": "Represent jug capacities, legal operations, states and a solution path.",
    "content": "A water-jug problem is represented by the amount of water in each jug. A state such as (x,y) records the water levels. Operators commonly include filling a jug, emptying a jug, and pouring from one jug into the other until a jug is full or empty. The exact capacities and goal amount must match the question given.",
    "points": [
      "Write the state representation clearly, e.g. (x,y).",
      "List legal operators as production rules with preconditions and results.",
      "Show the initial state and the goal test.",
      "Trace each state in the solution path; do not skip intermediate states.",
      "Your scanned reference notes contain a 5-gallon/3-gallon example, while the previous-year paper asks a 4-gallon/3-gallon variant. Match the capacities in the exam question."
    ],
    "exam": "Define production systems; formulate the water-jug problem, write production rules and show a solution path."
  },
  {
    "id": "missionaries",
    "unit": 2,
    "title": "Missionaries and Cannibals",
    "tag": "State-space problem",
    "summary": "Encode river-bank states and enforce the safety constraint.",
    "content": "The lecture encodes the numbers of missionaries and cannibals on both banks together with the boat position. The legal moves transfer the allowed boat load across the river. A state is invalid if missionaries on a bank are outnumbered by cannibals when missionaries are present.",
    "points": [
      "Specify state variables and initial/goal states.",
      "List valid boat-load operators.",
      "Reject states that violate the safety constraint or exceed population totals.",
      "Trace a valid path and show the boat position at each step.",
      "Use the exact boat capacity and conditions stated in the question."
    ],
    "exam": "Represent the missionaries-and-cannibals problem using operators and write a solution path."
  },
  {
    "id": "other-puzzles",
    "unit": 2,
    "title": "State-Space Problems: Farmer Puzzle, 8-Puzzle & TSP",
    "tag": "Problem models",
    "summary": "Practise converting familiar puzzles into formal state-space problems.",
    "content": "The syllabus and lecture outline name the Farmer, Cow, Tiger and Grass puzzle, the 8-puzzle and the travelling salesperson problem (TSP). For each, state representation, operators, initial state and goal condition are essential. In TSP, the goal is a minimum-cost tour visiting each city once and returning to the start.",
    "points": [
      "Farmer puzzle: define which items are on each bank and encode legal crossings and constraints.",
      "8-puzzle: a state is the arrangement of eight numbered tiles and a blank; a move slides an adjacent tile into the blank.",
      "TSP: a state/path represents city visits; the objective is the shortest valid tour.",
      "Draw the state-space diagram requested by the question and label transitions."
    ],
    "exam": "Explain state-space representation for the 8-puzzle or TSP."
  },
  {
    "id": "tictactoe",
    "unit": 1,
    "title": "Tic-Tac-Toe Game Playing",
    "tag": "Practical",
    "summary": "Represent the board and reason about legal moves and winning states.",
    "content": "The current amended syllabus explicitly includes Tic-Tac-Toe game playing as Unit 1 self-learning/term work. The lecture deck also demonstrates a board-vector representation: each cell encodes blank, X or O, and legal moves change the board state.",
    "points": [
      "Represent the nine cells and define legal moves.",
      "Define terminal conditions: X wins, O wins, or draw.",
      "The lecture deck describes a move-table approach using 3^9 possible board encodings.",
      "A simple Python implementation is listed as self-learning/term work in the amended syllabus."
    ],
    "exam": "Explain how Tic-Tac-Toe can be represented as a state-space problem."
  },
  {
    "id": "search-measures",
    "unit": 2,
    "title": "Search Strategy and Evaluation Criteria",
    "tag": "Core concept",
    "summary": "Compare search methods using completeness, time, space and optimality.",
    "content": "A search strategy chooses the order in which nodes are expanded. The lecture material evaluates strategies by completeness, systematicity, time complexity, space complexity and optimality. Complexity discussions use branching factor b, shallowest solution depth d and maximum depth m.",
    "points": [
      "Completeness: will it find a solution if one exists?",
      "Systematicity: does it avoid repeatedly visiting the same state?",
      "Time complexity: number of nodes generated or expanded.",
      "Space complexity: maximum number of nodes stored.",
      "Optimality: does it find a least-cost solution?",
      "Distinguish tree search from graph search and account for repeated states/cycles."
    ],
    "exam": "List and explain the criteria used to evaluate search strategies."
  },
  {
    "id": "production",
    "unit": 2,
    "title": "Production Systems and Control Strategies",
    "tag": "Rules",
    "summary": "Understand rules, database/knowledge, control strategy and rule applier.",
    "content": "The lecture describes a production system as a way to structure AI search programs. A production rule has a left-hand side that determines when it applies and a right-hand side describing the action/result. A control strategy decides which applicable rule is selected.",
    "points": [
      "Rule set: production rules with conditions and actions.",
      "Knowledge/database: information about the current problem.",
      "Control strategy: chooses rule order and resolves conflicts.",
      "Rule applier: executes the selected rule.",
      "The lecture also discusses production-system characteristics and classes; these should be covered from the corresponding slides in the detailed notes."
    ],
    "exam": "Define a production system and explain its four basic components."
  },
  {
    "id": "bfs",
    "unit": 2,
    "title": "Breadth-First Search (BFS)",
    "tag": "Uninformed search",
    "summary": "Explore the shallowest unexpanded node first using a FIFO queue.",
    "content": "BFS expands all nodes at the current depth before moving to the next depth. The lecture specifies a FIFO queue/fringe representation. It is complete when the branching factor is finite and can find a shallowest solution when each step has equal cost.",
    "points": [
      "Initialize a queue with the start node and mark it discovered.",
      "Remove the front node; test whether it is the goal.",
      "Add undiscovered successors to the back of the queue.",
      "Continue until the goal is found or the queue is empty.",
      "For a graph implementation, track visited nodes to avoid cycles.",
      "Common complexity for graph traversal is O(V+E); the tree-search lecture also discusses branching-factor notation."
    ],
    "exam": "Write the BFS algorithm, trace it on a graph and state its advantages."
  },
  {
    "id": "dfs",
    "unit": 2,
    "title": "Depth-First Search (DFS)",
    "tag": "Uninformed search",
    "summary": "Follow one branch deeply before backtracking, using a stack or recursion.",
    "content": "DFS selects the deepest node on the frontier. It is commonly implemented with recursion or a LIFO stack. It often uses less memory than BFS, but may get stuck on deep paths or cycles without suitable visited-state handling or depth limits.",
    "points": [
      "Initialize a stack with the start node (or call recursive DFS).",
      "Pop/visit the current node and test for the goal.",
      "Push unvisited successors, respecting the chosen successor order.",
      "Backtrack when a branch has no unvisited successors.",
      "Compare completeness, optimality and memory use with BFS."
    ],
    "exam": "Write DFS and compare it with BFS for graph traversal and search."
  },
  {
    "id": "informed",
    "unit": 2,
    "title": "Informed vs Uninformed Search",
    "tag": "Comparison",
    "summary": "Distinguish search using only problem definition from search guided by heuristic knowledge.",
    "content": "Uninformed (blind/exhaustive) search uses no additional problem-specific estimate to guide expansion. Informed (heuristic) search uses problem-specific knowledge, often an estimate of distance or cost to a goal, to guide which node is expanded.",
    "points": [
      "Uninformed examples in the lecture: BFS and DFS.",
      "Informed methods listed in the lecture: Generate-and-Test, Hill Climbing, Best-First Search, A*, AO* and Means-End Analysis.",
      "A heuristic can improve efficiency but does not automatically guarantee an optimal solution; guarantees depend on the algorithm and conditions."
    ],
    "exam": "Differentiate informed and uninformed search with examples."
  },
  {
    "id": "generate-test",
    "unit": 2,
    "title": "Generate-and-Test",
    "tag": "Heuristic search",
    "summary": "Generate a candidate, test it, and use feedback to continue the search.",
    "content": "Generate-and-Test repeatedly produces a possible solution and tests whether it satisfies the goal. The lecture notes connect it with exhaustive search and DFS with backtracking. It can be reasonable for small problems but may take a long time in a large search space.",
    "points": [
      "Generate a candidate solution or next state.",
      "Test the candidate against the goal/constraints.",
      "If successful, return the solution.",
      "If not, generate another candidate; use backtracking/feedback where appropriate.",
      "Its efficiency depends on the generator, test and size of the search space."
    ],
    "exam": "Explain the Generate-and-Test method, its algorithm and limitations."
  },
  {
    "id": "hill-climbing",
    "unit": 2,
    "title": "Hill Climbing",
    "tag": "Heuristic search",
    "summary": "Move to a better neighboring state according to an evaluation function.",
    "content": "Hill climbing is a local-search variant of Generate-and-Test. It evaluates neighboring states and moves toward an improved value. The lecture deck includes simple hill climbing, steepest-ascent hill climbing, stochastic hill climbing, and the problems of local maxima, plateaus and ridges.",
    "points": [
      "Simple hill climbing considers neighbors sequentially and may choose the first improvement.",
      "Steepest-ascent examines available neighbors and selects the best improvement.",
      "Local maximum: better than nearby states but not globally best.",
      "Plateau: neighboring states have similar evaluation values.",
      "Ridge: progress is difficult because the improving direction is not captured by simple local moves.",
      "Possible remedies in the lecture include backtracking, larger jumps and applying more than one rule."
    ],
    "exam": "Explain hill climbing and discuss local maxima, plateaus and ridges."
  },
  {
    "id": "best-first",
    "unit": 2,
    "title": "Best-First Search and OR Graphs",
    "tag": "Heuristic search",
    "summary": "Select the frontier node with the most promising evaluation score.",
    "content": "Best-first search chooses a node for expansion based on an evaluation function. The lecture lists Best-First Search on OR graphs. The detailed worked example and exact evaluation convention should follow the instructor's slides and question-specific graph.",
    "points": [
      "Maintain a frontier of candidate nodes.",
      "Evaluate candidates using the specified heuristic/evaluation function.",
      "Expand the most promising frontier node.",
      "Update the frontier with successors and continue until the goal is reached.",
      "For exam traces, show the OPEN list, selected node and updated costs/heuristics at each step."
    ],
    "exam": "Trace Best-First Search on a supplied graph and explain the role of the heuristic."
  },
  {
    "id": "astar",
    "unit": 2,
    "title": "A* Search",
    "tag": "Heuristic search",
    "summary": "Combine cost already incurred with estimated remaining cost.",
    "content": "A* commonly ranks a node n using f(n)=g(n)+h(n), where g(n) is the path cost from the start and h(n) estimates the remaining cost to a goal. For a graph-tracing question, compute and show the values specified by the given graph. Optimality depends on conditions such as an appropriate admissible heuristic and correct graph-search handling.",
    "points": [
      "g(n): cost from the start to n.",
      "h(n): estimated cost from n to a goal.",
      "f(n): estimated total solution cost through n.",
      "Keep OPEN/CLOSED bookkeeping clear when tracing the algorithm.",
      "Do not confuse A* with Greedy Best-First Search, which prioritizes h(n) alone."
    ],
    "exam": "Implement/trace A* on a given graph and compare it with Greedy Best-First Search."
  },
  {
    "id": "problem-reduction",
    "unit": 2,
    "title": "Problem Reduction and AO*",
    "tag": "Heuristic search",
    "summary": "Break a problem into subproblems and represent alternatives and dependencies.",
    "content": "The lecture's Unit 2 heuristic list names AO* as problem reduction. Problem reduction transforms a complex goal into smaller subgoals. In an AND-OR graph, an OR node can be solved by selecting one alternative, while an AND node requires all connected subproblems in the chosen decomposition to be solved.",
    "points": [
      "Identify the main problem and its subproblems.",
      "Represent alternative decompositions and required subgoals.",
      "Evaluate alternatives using the costs/heuristics supplied by the question.",
      "AO* updates estimates while marking the currently preferred solution subgraph.",
      "Follow the exact graph and notation used in your lecturer's worked example."
    ],
    "exam": "Explain problem reduction and the role of AO* in AND-OR graphs."
  },
  {
    "id": "mea",
    "unit": 2,
    "title": "Means-End Analysis (MEA)",
    "tag": "Heuristic search",
    "summary": "Reduce the difference between the current state and the goal by selecting operators.",
    "content": "Means-End Analysis compares the current state with the goal, identifies a difference, and selects an operator that can reduce that difference. If an operator's preconditions are not satisfied, those preconditions become subgoals. The process continues until the goal is achieved or no useful operator remains.",
    "points": [
      "Compare current state and goal state.",
      "Identify the most important difference.",
      "Choose an operator that reduces the difference.",
      "Establish and solve any preconditions as subgoals.",
      "Apply the operator and repeat the comparison."
    ],
    "exam": "Explain Means-End Analysis with its steps and a suitable example."
  }
];
