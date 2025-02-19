(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [235],
  {
    53122: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpu-node",
        function () {
          return t(98315);
        },
      ]);
    },
    7718: function (n, e, t) {
      "use strict";
      var a = t(85893);
      t(67294);
      var s = t(34585),
        r = t(55186),
        o = t(97807);
      t(46926),
        (e.Z = (n) => {
          let { content: e } = n;
          return (0, a.jsx)("div", {
            className: "h-full",
            children: (0, a.jsx)(s.U, {
              className: "markdown",
              remarkPlugins: [r.Z],
              rehypePlugins: [o.Z],
              children: e,
            }),
          });
        });
    },
    98315: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t(85893),
        s = t(7718);
      t(67294),
        (e.default = () =>
          (0, a.jsx)("div", {
            className: "w-full h-full min-h-screen ",
            children: (0, a.jsx)(s.Z, {
              content:
                '\n# Destra-DGPU – Alpha\n\nDestra-DGPU is a Python package for starting and managing a GPU Worker Node in the Destra GPU Network.\n\nThis library is designed to handle all things related to Destra GPU Worker Node, including installing the NVIDIA drivers for the available GPUs, installing all the required dependency libraries, starting the GPU Worker Node, registering with the Destra GPU Registry, and stopping the GPU Worker Node.\n\n## Smart Contract\n\n- Destra GPU Registry\n\n## Prerequisites\n\n- Ubuntu system\n- Nvidia GPU\n- Stable internet connection\n- Sepolia RPC\n- Wallet with 0.2 Sepolia ETH\n\n## Setup Instructions\n\n### 1. Clone the GitHub Repository\n\nFirst, clone the GitHub repository to your local machine.\n\n```bash copyable\ngit clone https://github.com/DestraNetwork/destra-dgpu.git\ncd destra-dgpu\n```\n\n### 2. Run the `install_drivers.sh` Script\n\nThis script will install the necessary drivers for your GPU. Ensure you have the necessary permissions to execute the script.\n\n```bash copyable\ncd destra-dgpu\nchmod +x install_drivers.sh\nsudo ./install_drivers.sh\n```\n\n### 3. Install Python 3.9.6\n\nEnsure you have Python 3.9.6 installed. You can either install from source or use `pyenv` to manage your Python versions.\n\n#### Install from Source (Recommended)\n\n1. Install Required Build Tools\n\n    ```bash copyable\n    sudo apt-get update\n    sudo apt-get install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev curl libbz2-dev\n    ```\n\n2. Download and Extract Python Source Code\n\n    ```bash copyable\n    cd /usr/src\n    sudo wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz\n    sudo tar xzf Python-3.9.6.tgz\n    ```\n\n3. Build and Install Python\n\n    ```bash copyable\n    cd Python-3.9.6\n    sudo ./configure --enable-optimizations\n    sudo make altinstall\n    ```\n\n#### Using `pyenv`\n\n1. Install `pyenv`\n\n    ```bash copyable\n    curl https://pyenv.run | bash\n    ```\n\n2. Add the following lines to your shell configuration files (e.g., `~/.bashrc` , `~/.zshrc`):\n\n    ```bash copyable\n    export PATH="$HOME/.pyenv/bin:$PATH"\n    eval "$(pyenv init --path)"\n    eval "$(pyenv init -)"\n    eval "$(pyenv virtualenv-init -)"\n    ```\n\n3. Restart your shell or source the configuration file:\n\n    ```bash copyable\n    source ~/.bashrc\n    source ~/.zshrc\n    ```\n\n4. Install Python 3.9.6\n\n    ```bash copyable\n    pyenv install 3.9.6\n    pyenv global 3.9.6\n    ```\n\n### 4. Set Up a Virtual Environment\n\nCreate and activate a virtual environment for your project.\n\n```bash copyable\npython3.9 -m venv dgpu-env\nsource dgpu-env/bin/activate\n```\n\n### 5. Install the Destra-DGPU Package\n\nInstall the `destra-dgpu` package from the provided wheel file.\n\n```bash copyable\ncd ~/destra-dgpu\npip install destra-dgpu/destra_dgpu-0.1.0-cp39-cp39-linux_x86_64.whl\n```\n\n### 6. Set Environment Variables\n\nSet the environment variable `NODE_OPERATOR_PRIVATE_KEY` with your private key. Replace `YourPrivateKeyHere` with your actual private key (without the `0x` prefix). Ensure at least 0.2 Sepolia ETH.\n\n```bash copyable\nexport NODE_OPERATOR_PRIVATE_KEY=YourPrivateKeyHere\n```\n\n### 7. Start the GPU Worker Node\n\nIt is recommended to use `tmux` to manage the session and keep the GPU worker node running in the background.\n\n1. Install `tmux`:\n\n    ```bash copyable\n    sudo apt-get install tmux\n    ```\n\n2. Start a new `tmux` session:\n\n    ```bash copyable\n    tmux new -s destra-gpu\n    ```\n\n3. Start the GPU worker node. Replace `<destra_gpu_registry_contract_address>` and `<rpc_url>` with the appropriate values.\n\n    ```bash copyable\n    destra-gpu-start-worker <destra_gpu_registry_contract_address> <sepolia_rpc_endpoint>\n    ```\n\n    Example:\n\n    ```bash copyable\n    destra-gpu-start-worker\n    ```\n\n4. Detach from the `tmux` session by pressing `Ctrl + b`, then `d`. This will keep the session running in the background.\n\n	To reattach to the session later, use:\n\n    ```bash copyable\n    tmux attach -t destra-gpu\n    ```\n\n### 8. Stop the GPU Worker Node\n\nTo stop the GPU worker node, run the following command from anywhere:\n\n```bash copyable\ndestra-gpu-stop-worker\n```\n\n\n## Troubleshooting\n\nIf you encounter any issues, ensure that:\n\n- The environment variables are set correctly.\n- The necessary dependencies are installed.\n- The correct Python version is being used.\n- You have a Nvidia GPU.\n- The `install_drivers.sh` script was executed successfully.\n- If you run a node with incompatible GPU or w/o GPU, no tasks will be assigned.\n- If you still face any issues, contact us on our Telegram channel.\n',
            }),
          }));
    },
  },
  function (n) {
    n.O(0, [581, 888, 774, 179], function () {
      return n((n.s = 53122));
    }),
      (_N_E = n.O());
  },
]);
