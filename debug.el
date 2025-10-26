;; Eval Buffer with `M-x eval-buffer' to register the newly created template.

(dap-register-debug-template
  "Debug Laughing-Dollop"
  (list :type "node"
        :cwd nil
        :request "launch"
        :program "${workspaceFolder}/app.js"
        :name "Node::Run"))
