import time, shlex, subprocess
port = "http://127.0.0.1:8000/unicreate/"

while True: 
    cmd= f'curl -X POST {port} -d "name=ВУЗ из консоли"'
    args = shlex.split(cmd)
    run = subprocess.run(args)
    # time.sleep(10)
    break