const topics = [
  {
    "id": "ai-intro",
    "unit": 1,
    "title": "Introduction to Artificial Intelligence",
    "tag": "Foundations",
    "summary": "Understand what AI studies and how the course frames intelligent behaviour.",
    "content": "AI is the field of computer science concerned with designing systems that perform tasks normally associated with human intelligence. The Unit 1 PPT gives several definitions: John McCarthy describes AI as the science and engineering of making intelligent machines, especially intelligent computer programs; Elaine Rich and Kevin Knight describe it as studying how to make computers do things people currently do better; Winston connects AI with computations that enable perception, reasoning and action. The term “Artificial Intelligence” was coined by John McCarthy in 1956. For an exam answer, start with one clear definition, explain the abilities involved, and give examples.",
    "points": [
      "AI systems may perceive their environment, learn patterns, reason from information, solve problems, understand language and select actions.",
      "Basic flow from the PPT: Perceive → Learn → Reason → Decide. This is a useful simplified view, not a rule that every AI system must follow in exactly this order.",
      "Traditional programming: the programmer writes explicit rules and the program applies them to data. A learning-based AI system uses examples and a learning algorithm to produce a model, which is then used to make predictions or decisions on new data.",
      "Example: a calculator follows specified arithmetic rules. A spam classifier learns patterns from examples of spam and non-spam email, then estimates whether a new email is spam.",
      "AI is useful when tasks involve complex patterns, uncertain inputs, perception, language or large numbers of possible choices. Ordinary rule-based programming remains appropriate for many well-defined tasks.",
      "Classic four viewpoints: thinking humanly, acting humanly, thinking rationally and acting rationally. They differ in whether the focus is internal reasoning or observable action, and whether the benchmark is human behaviour or rational behaviour."
    ],
    "exam": "Define Artificial Intelligence. Explain the four approaches to AI with examples."
  },
  {
    "id": "history",
    "unit": 1,
    "title": "History and Development of AI",
    "tag": "Timeline",
    "summary": "Trace milestone periods and the changing focus of AI research.",
    "content": "The lecturer’s timeline shows AI developing through changing research priorities. In 1956 the name “Artificial Intelligence” was coined. Early work emphasised search, games, formal logic and theorem proving. Later work included robotics, perception, knowledge representation and expert systems. The 1980s saw expert systems expand into industry. In the 1990s, rational agents, probabilistic reasoning and machine learning became prominent. The 2000s emphasised integrating AI methods, reasoning under uncertainty, machine learning and robotics. Treat this as the timeline presented in the supplied PPT, rather than a complete history of every AI milestone.",
    "points": [
      "1956: John McCarthy and the naming of AI.",
      "1960s: search, game playing, formal logic and theorem proving.",
      "1970s: robotics, perception, knowledge representation and expert systems.",
      "1980s: growth of expert systems and commercial AI activity.",
      "1990s: rational agents, probabilistic reasoning and machine learning.",
      "2000s: integrated AI methods, uncertainty, machine learning and renewed robotics.",
      "Exam structure: introduce the period, name its dominant themes, and explain how the focus changed over time."
    ],
    "exam": "Describe the development of AI through milestone periods."
  },
  {
    "id": "intelligent-systems",
    "unit": 1,
    "title": "Intelligent Systems and Foundations of AI",
    "tag": "Concepts",
    "summary": "Connect intelligent behaviour to the disciplines that underpin AI.",
    "content": "An intelligent system uses available information to select actions that help it achieve a goal. The Unit 1 PPT describes AI through capabilities such as perception, learning, reasoning and decision-making. AI is interdisciplinary: mathematics supports formal reasoning and probability; neuroscience offers inspiration for models of learning and perception; control theory contributes feedback and goal-directed behaviour; linguistics supports language processing. The syllabus explicitly includes intelligent systems and foundations of AI, so connect each foundation to a capability rather than memorising field names alone.",
    "points": [
      "Perception: sense and interpret input; examples include face recognition and object detection.",
      "Learning: identify patterns from data and improve performance; example: recommendation systems.",
      "Reasoning: draw conclusions from known facts; examples include rule-based expert systems and diagnosis support.",
      "Decision-making: choose an action using the current state and objective; examples include game-playing systems and autonomous navigation.",
      "Mathematics: logic, probability, optimisation and algorithms.",
      "Neuroscience: understanding biological perception and learning as inspiration for computational models.",
      "Control theory: feedback, stability and selecting actions in a changing environment.",
      "Linguistics: syntax, meaning and communication in natural-language systems."
    ],
    "exam": "Explain any four foundations of AI."
  },
  {
    "id": "ai-domains",
    "unit": 1,
    "title": "Domains, Subareas and Applications of AI",
    "tag": "Applications",
    "summary": "Organize AI problem domains and give examples from the lecture notes.",
    "content": "The Unit 1 PPT names application examples including search engines, healthcare, face recognition, sentiment analysis, voice assistants, self-driving systems and recommendation systems. Organise an exam answer by stating the domain, the task AI performs, the input it uses and the benefit or limitation. These are examples of applications, not a claim that all systems in the domain are fully autonomous.",
    "points": [
      "Healthcare: analyse medical images or records to highlight patterns for professional review.",
      "Computer vision: detect or recognise objects and faces in images; performance depends on data, lighting and context.",
      "Natural-language processing: process or generate text; examples include sentiment analysis, translation and conversational assistants.",
      "Speech systems: convert spoken language to text or interpret voice commands.",
      "Recommendation systems: estimate which products, videos or songs may interest a user from interaction patterns.",
      "Search: rank results according to query relevance and other signals.",
      "Autonomous driving and robotics: combine sensing, prediction, planning and control; real-world safety is a major challenge.",
      "Game playing: represent board positions as states, legal moves as operators, and winning or draw conditions as goal/terminal tests."
    ],
    "exam": "Classify AI task domains and explain applications with examples."
  },
  {
    "id": "current-trends",
    "unit": 1,
    "title": "Development and Current Trends in AI",
    "tag": "Current context",
    "summary": "Connect the historical development of AI to trends emphasized in the course material.",
    "content": "The syllabus includes development of AI and current trends. The PPT gives historical movement toward integrated methods, machine learning, reasoning under uncertainty and robotics, and illustrates current uses such as language tools, vision, recommendation, healthcare and self-driving research. Explain a trend by describing the capability and a practical example. Avoid claiming that current AI is error-free or generally intelligent: the lecture also notes limitations such as high cost, dependence on training/design, lack of human feelings and risks from overdependence.",
    "points": [
      "Machine learning: models learn patterns from examples rather than relying only on manually written rules.",
      "Deep learning: a family of machine-learning methods using multi-layer neural networks; distinguish it from AI as a whole.",
      "Natural-language systems: support question answering, summarisation, translation and conversational interaction.",
      "Computer vision: interpret images and video for recognition or detection tasks.",
      "Recommendation and predictive systems: personalise results or estimate likely outcomes from data.",
      "Robotics and autonomous systems: connect perception with physical action.",
      "Important limitations from the lecture: development and maintenance can be expensive; systems may fail outside training conditions; outputs can be wrong; responsible oversight remains necessary."
    ],
    "exam": "Describe the development of AI and discuss current trends with examples."
  },
  {
    "id": "state-space",
    "unit": 2,
    "title": "General Problem Solving & State-Space Search",
    "tag": "Core concept",
    "summary": "Formulate a problem with states, operators, initial state, goal state and a solution path.",
    "content": "Problem solving in AI is the process of finding a sequence of actions from an initial description to a desired goal. A problem space includes the initial state, possible actions/operators, a goal state or goal test, and constraints describing legal states. State-space search explores states to find a path from start to goal. In a graph representation, nodes are states and arcs represent actions or transitions. The supplied Unit 2 PPT uses the 8-puzzle to show how moving a tile into the blank creates a new state.",
    "points": [
      "State: a complete description of the problem at one moment.",
      "Initial state: the configuration from which search begins.",
      "Goal state / goal test: the desired configuration or a test that checks whether the objective is satisfied.",
      "Operator: a legal action that transforms one state into another. Not every operator is legal in every state.",
      "State space: all states reachable through legal operators from the initial state.",
      "Solution path: an ordered sequence of states/actions from the initial state to a goal. There may be multiple paths, repeated states or dead ends.",
      "Control strategy: decides which applicable operator or frontier node is considered next.",
      "8-puzzle example: state = arrangement of eight numbered tiles and a blank in a 3×3 board; operators move an adjacent tile into the blank; goal test compares the board with the specified target."
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
    "summary": "Represent board states, legal moves and win/draw tests for a small intelligent game.",
    "content": "The current 24CS540 syllabus explicitly includes Tic-Tac-Toe Game Playing and suggests implementing a simple game in Python as self-learning work. A board configuration is a state; placing a mark in an empty square is an operator; legal moves generate successor states. Three marks in a row, column or diagonal is a win, and a full board without a winner is a draw. The topic links intelligent decision-making with search over possible game states.",
    "points": [
      "State representation: the nine board cells, each empty, X or O, plus whose turn it is.",
      "Initial state: all nine cells empty and the first player selected.",
      "Operators: place the current player’s mark in any empty cell.",
      "Terminal test: X wins, O wins, or all cells are filled (draw).",
      "A simple program can choose a legal move randomly; a stronger game-playing agent can evaluate future states.",
      "For an exam answer, specify state, initial state, legal operators and terminal/goal test."
    ],
    "exam": "Formulate Tic-Tac-Toe as an AI problem using state, operators and goal/terminal test."
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
    "content": "A production system is a formal problem-solving model built from condition–action rules and a mechanism for applying them. The Unit 2 PPT describes production rules, working memory/current state and a control strategy; it also discusses the rule applier as a separate component. A rule is commonly written IF condition THEN action. The system checks which rules match the current state, selects one according to its control strategy, applies it and updates the state.",
    "points": [
      "Production rules: encode possible actions as condition → action pairs. Example: IF the 4-gallon jug is not full THEN fill it.",
      "Working memory / knowledge database: stores facts describing the current state and is updated after an action.",
      "Control strategy: resolves which applicable rule to choose when several are possible.",
      "Rule applier: executes the selected rule and creates the resulting state.",
      "Useful because rules can be added or modified separately from the control mechanism.",
      "A good control strategy should avoid unproductive loops and repeated states where possible.",
      "For a problem-solving answer, define the state representation, initial and goal states, list legal rules, and trace the rule sequence."
    ],
    "exam": "Define a production system and explain its four basic components."
  },
  {
    "id": "bfs",
    "unit": 2,
    "title": "Breadth-First Search (BFS)",
    "tag": "Uninformed search",
    "summary": "Explore the shallowest unexpanded node first using a FIFO queue.",
    "content": "Breadth-First Search explores the frontier level by level: it expands all nodes at depth d before nodes at depth d+1. It normally uses a FIFO queue. Add the start node to the queue; repeatedly remove the oldest node, test for the goal, and enqueue its unvisited successors. Store parent links if the actual path must be reconstructed. For graph search, a visited set prevents repeated expansion and cycles.",
    "points": [
      "Data structure: FIFO queue (First In, First Out).",
      "Procedure: enqueue start; mark discovered; while queue is non-empty, dequeue a node, test the goal, then enqueue each undiscovered successor and record its parent.",
      "When all edges have equal cost, BFS finds a path with the fewest edges. It is complete for finite branching when the goal is reachable.",
      "Limitation: the frontier can become very large because an entire level may need to be stored.",
      "Tree-search time is commonly expressed O(b^(d+1)) and space O(b^(d+1)), where b is branching factor and d is the shallowest goal depth. Exact bounds depend on the implementation and graph assumptions.",
      "Trace tip: draw the queue after each expansion and write the visit order separately from the final solution path."
    ],
    "exam": "Write the BFS algorithm, trace it on a graph and state its advantages."
  },
  {
    "id": "dfs",
    "unit": 2,
    "title": "Depth-First Search (DFS)",
    "tag": "Uninformed search",
    "summary": "Follow one branch deeply before backtracking, using a stack or recursion.",
    "content": "Depth-First Search follows one branch as deeply as possible before returning to explore another branch. It uses a LIFO stack or recursion. Start by pushing the initial state; pop a state, test it, and push its unvisited successors. Parent pointers can reconstruct the path. On graphs, track visited states; on very deep or infinite spaces, use depth limits or other safeguards.",
    "points": [
      "Data structure: LIFO stack (Last In, First Out) or recursion.",
      "DFS explores deeply before backtracking to an alternative branch. Successor ordering affects the visit order.",
      "It can use less memory than BFS because it often stores a current path and a limited set of alternatives.",
      "It does not generally guarantee the shortest path. Without cycle checking or depth safeguards it can follow loops or infinite branches.",
      "Common tree-search bounds: time O(b^m), space O(bm), where m is maximum search depth; actual graph-search memory depends on visited-state storage.",
      "Choose DFS when memory is constrained and any solution may be acceptable; choose BFS when a shallowest/fewest-edge solution is important."
    ],
    "exam": "Write DFS and compare it with BFS for graph traversal and search."
  },
  {
    "id": "informed",
    "unit": 2,
    "title": "Informed vs Uninformed Search",
    "tag": "Comparison",
    "summary": "Distinguish search using only problem definition from search guided by heuristic knowledge.",
    "content": "Uninformed (blind) search uses the problem definition—initial state, operators and goal test—without a heuristic estimate of which state is closer to the goal. Informed search uses additional problem-specific knowledge, commonly a heuristic h(n), to guide node selection. A heuristic is an estimate, not necessarily the true remaining cost, and the quality of the search depends on the method and the heuristic.",
    "points": [
      "Uninformed examples in the PPT: BFS and DFS. Their node order follows a general rule rather than a goal-distance estimate.",
      "Informed examples: Greedy Best-First Search uses h(n); A* uses f(n)=g(n)+h(n).",
      "h(n): estimated cost from node n to a goal. g(n): cost from the start to n along the path found so far.",
      "Heuristics can reduce unnecessary exploration, but a poor heuristic can mislead the search.",
      "Greedy Best-First prioritises apparent closeness to the goal and is not generally optimal. A* balances the cost already paid with the estimated remaining cost.",
      "Do not write that every informed algorithm is optimal; optimality depends on the algorithm and conditions on the heuristic."
    ],
    "exam": "Differentiate informed and uninformed search with examples."
  },
  {
    "id": "generate-test",
    "unit": 2,
    "title": "Generate-and-Test",
    "tag": "Heuristic search",
    "summary": "Generate a candidate, test it, and use feedback to continue the search.",
    "content": "Generate-and-Test repeatedly creates a candidate solution and checks whether it satisfies the goal or constraints. If it passes, return it; if it fails, generate another candidate. It is simple and useful when candidates are easy to generate and test, but can be inefficient when the candidate space is large or generation produces many invalid candidates.",
    "points": [
      "Step 1: generate a candidate state or solution.",
      "Step 2: test whether it satisfies the goal and constraints.",
      "Step 3: if it passes, report success; otherwise generate another candidate.",
      "The generator determines which candidates are considered; the test determines whether a candidate is acceptable.",
      "Limitation: without guidance, it may examine many candidates and repeat work."
    ],
    "exam": "Explain the Generate-and-Test method, its algorithm and limitations."
  },
  {
    "id": "hill-climbing",
    "unit": 2,
    "title": "Hill Climbing",
    "tag": "Heuristic search",
    "summary": "Move to a better neighboring state according to an evaluation function.",
    "content": "Hill Climbing is a local heuristic search method. It evaluates the current state and moves to a neighbouring state that appears better according to an objective/evaluation function. It continues until it reaches a goal or cannot find an improving neighbour. The PPT describes it as greedy and notes that it does not normally backtrack, so it can stop before reaching the global optimum.",
    "points": [
      "Basic procedure: evaluate the current state; generate neighbours; select an improving neighbour; move there; repeat until goal or no improvement.",
      "Local maximum: better than neighbouring states but not the best state overall.",
      "Plateau: neighbouring states have the same evaluation, so progress may stall.",
      "Shoulder: a flat region with an uphill route at its edge.",
      "Global maximum: best possible value in the full search space. For cost-minimisation problems, the analogous idea is a global minimum.",
      "Advantage: simple and often memory-efficient. Limitation: local maxima, plateaus and shoulders can trap the search."
    ],
    "exam": "Explain hill climbing and discuss local maxima, plateaus and ridges."
  },
  {
    "id": "best-first",
    "unit": 2,
    "title": "Best-First Search and OR Graphs",
    "tag": "Heuristic search",
    "summary": "Select the frontier node with the most promising evaluation score.",
    "content": "Best-First Search selects the most promising node currently in OPEN according to an evaluation rule. In Greedy Best-First Search, the evaluation is usually h(n), an estimate of distance/cost to the goal. Maintain OPEN for generated candidates and CLOSED for expanded nodes; select the best OPEN node, test it, expand it and add eligible successors. The supplied deck also discusses OR graphs, where alternative branches represent choices among ways to achieve a goal.",
    "points": [
      "OPEN: generated nodes waiting to be explored. CLOSED: nodes already expanded.",
      "Greedy selection: choose the node with the lowest heuristic h(n), assuming lower means closer/cheaper to the goal.",
      "Record parent pointers and update duplicate states carefully so the final path can be recovered.",
      "It may reach a goal quickly but is not generally guaranteed to find the least-cost path.",
      "OR graph: at an OR node, solving one suitable successor can be enough to solve that node; AND-OR search additionally represents subgoals that may all need to be solved."
    ],
    "exam": "Trace Best-First Search on a supplied graph and explain the role of the heuristic."
  },
  {
    "id": "astar",
    "unit": 2,
    "title": "A* Search",
    "tag": "Heuristic search",
    "summary": "Combine cost already incurred with estimated remaining cost.",
    "content": "A* ranks nodes using f(n)=g(n)+h(n). Here g(n) is the cost from the start to n along the current path, h(n) estimates the remaining cost from n to a goal, and f(n) estimates the total solution cost through n. Select the lowest-f node from OPEN, expand it, and update paths to successors when a lower g value is found. The Unit 2 PPT presents A* as combining path-cost search with heuristic guidance.",
    "points": [
      "Initialise OPEN with the start node, g(start)=0 and f(start)=h(start); initialise CLOSED empty.",
      "Select the OPEN node with minimum f(n). If it is a goal, reconstruct the path using parent links.",
      "For each successor, compute tentative g = g(current) + step cost. If this path is better, update its parent, g and f, and ensure it can be explored.",
      "Admissible heuristic: never overestimates the true remaining optimal cost. Consistency is a stronger condition useful for graph-search behaviour.",
      "A* is optimal under standard conditions, including suitable non-negative step costs and an admissible heuristic for tree search; graph-search implementations need appropriate handling of consistency/reopening.",
      "Comparison: Greedy Best-First uses h(n) only; A* uses both cost so far and estimated remaining cost."
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
  },
  {
    "id": "problem-characteristics",
    "unit": 2,
    "title": "Characteristics of a Problem",
    "tag": "Problem formulation",
    "summary": "Describe what makes a problem suitable for an AI search formulation.",
    "content": "The Unit 2 syllabus explicitly includes characteristics of a problem. The supplied lecture deck frames problems through states, operators, initial state, goal state, constraints and solution paths. When formulating a problem, specify enough information that legal actions and goal satisfaction can be checked unambiguously.",
    "points": [
      "Initial state: the starting configuration.",
      "Goal state or goal test: the required outcome.",
      "Operators/actions: legal transformations between states.",
      "State space: possible reachable configurations.",
      "Path cost or action cost, when the problem asks for a least-cost solution.",
      "Constraints: conditions that make a state or action illegal.",
      "Solution criterion: reach any goal, minimise number of actions, minimise total cost, or optimise another stated measure.",
      "Repeated states and loops can waste work; use a suitable control strategy and repeated-state checks."
    ],
    "exam": "Explain the main components and characteristics used to formulate an AI problem."
  },
  {
    "id": "exhaustive-search",
    "unit": 2,
    "title": "Exhaustive Search and Control Strategies",
    "tag": "Uninformed search",
    "summary": "Understand systematic exploration before using heuristic guidance.",
    "content": "Exhaustive search explores possible states systematically according to a control strategy without relying on a heuristic estimate. BFS and DFS are standard examples of uninformed search. Exhaustive methods can be complete under appropriate conditions, but the number of states may grow rapidly with branching factor and depth.",
    "points": [
      "Search strategy specifies which frontier node to expand next.",
      "BFS explores breadth-first and uses a queue; DFS explores depth-first and uses a stack or recursion.",
      "A search tree may contain repeated states even when the underlying state graph does not; duplicate detection can reduce redundant work.",
      "Time and memory requirements depend on branching factor, depth, graph structure and duplicate handling.",
      "Exhaustive search can be appropriate for small spaces or when no useful heuristic is available.",
      "For larger spaces, heuristic methods use additional problem knowledge to prioritise promising states."
    ],
    "exam": "What is exhaustive search? Explain how BFS and DFS implement different control strategies."
  }
];
